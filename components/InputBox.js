import { useSession } from "next-auth/client";
import Image from "next/image";
import {
  PhotographIcon,
  VideoCameraIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, Timestamp, setDoc, doc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef();
  const filePickerRef = useRef();
  const [imageToPost, setImageToPost] = useState();

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: Timestamp.now(),
    }).then((document) => {
      if (imageToPost) {
        console.log("document_id:", document.id);
        const storageRef = ref(storage, `posts/${document.id}`);
        const uploadTask = uploadString(storageRef, imageToPost, "data_url");

        

        removeImage();

        console.log("uploadTask: ", uploadTask);
        uploadTask.then((result) => {
          getDownloadURL(result.ref).then((downloadURL) => {
            console.log("download url is: ", downloadURL);
            setDoc(
              doc(db, `posts/${document.id}`),
              {
                postImage: downloadURL,
              },
              { merge: true }
            );
          });
        });

        
      } else {
        console.log("no file to upload");
      }
      inputRef.current.value = "";
    });
  };

  const previewImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (event) => {
      setImageToPost(event.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost("");
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt=""
        ></Image>
        <form className="flex flex-1">
          <input
            ref={inputRef}
            type="text"
            className="rounded-full h-12 flex-2 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`${session.user.name} 来分享你的新鲜事吧`}
          />
          <button hidden type="submit" onClick={sendPost}>
            发帖
          </button>
        </form>
        {imageToPost && (
          <div
            className="flex flex-grow-0 flex-col items-center cursor-pointer filter hover:brightness-110 transition duration-150 transform-gpu hover:scale-150"
            onClick={removeImage}
          >
            <Image
              src={imageToPost}
              className="h-10 object-contain"
              alt=""
              width={40}
              height={40}
            ></Image>
            <p className="text-red-500 text-center">删除</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">直播视频</p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <PhotographIcon className="h-7 text-green-500"></PhotographIcon>
          <p className="text-xs sm:text-sm xl:text-base">照片/视频</p>
          <input
            ref={filePickerRef}
            type="file"
            onChange={previewImage}
            className="hidden"
            accept="image/*, video/*"
          ></input>
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500"></EmojiHappyIcon>
          <p className="text-xs sm:text-sm xl:text-base">感受/活动</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
