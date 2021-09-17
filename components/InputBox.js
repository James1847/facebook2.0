import { useSession } from "next-auth/client"
import Image from "next/image"

function InputBox() {
    const [session] = useSession();

    return (
        <div>
            <div>
                <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed" alt=""></Image>
                <form className="flex flex-1">
                    <input type="text" className="" placeholder="分享你的新鲜事吧" />
                </form>
            </div>
        </div>
    )
}

export default InputBox
