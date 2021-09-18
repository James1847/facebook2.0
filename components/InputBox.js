import { useSession } from "next-auth/client"
import Image from "next/image"
import { PhotographIcon, VideoCameraIcon, EmojiHappyIcon} from "@heroicons/react/outline"
import { useRef } from 'react'
import { db } from "../firebase"


function InputBox() {
    const [session] = useSession();
    const inputRef = useRef();


    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;

        db.collection('posts').add(
            message: '1',
            name: '张三'
        )
    };

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed" alt=""></Image>
                <form className="flex flex-1">
                    <input ref={inputRef} type="text" className="rounded-full h-12 flex-2 bg-gray-100 flex-grow px-5 focus:outline-none" placeholder={`${session.user.name} 来分享你的新鲜事吧`} />
                    <button hidden type="submit" onClick={sendPost}>发帖</button>
                </form>
            </div>

            <div className="flex justify-evenly p-3">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
                    <p className="text-xs sm:text-sm xl:text-base">直播视频</p>
                </div>

                <div className="inputIcon">
                    <PhotographIcon className="h-7 text-green-500"></PhotographIcon>
                    <p className="text-xs sm:text-sm xl:text-base">照片/视频</p>
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-500"></EmojiHappyIcon>
                    <p className="text-xs sm:text-sm xl:text-base">感受/活动</p>                
                </div>

            </div>
        </div>
    )
}

export default InputBox