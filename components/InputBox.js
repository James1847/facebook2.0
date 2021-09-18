import { useSession } from "next-auth/client"
import Image from "next/image"

function InputBox() {
    const [session] = useSession();

    // const sendPost = (e) => {
    //     e.preventDefault();
    // };

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed" alt=""></Image>
                <form className="flex flex-1">
                    <input type="text" className="rounded-full h-12 flex-2 bg-gray-100 flex-grow px-5 focus:outline-none" placeholder={`${session.user.name} 来分享你的新鲜事吧`} />
                    {/* <button hidden type="submit" onClick={sendPost}>发帖</button> */}
                </form>
            </div>
        </div>
    )
}

export default InputBox