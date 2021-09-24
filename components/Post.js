import Image from "next/image";

function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
          <div>
            <p>{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-4">{message}</div>

        {postImage && (
          <div className="relative h-56 md:h-96 bg-white">
            {/* <div>{postImage}</div> */}
            <Image src={postImage} objectFit="cover" alt="" layout="fill" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
