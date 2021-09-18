import Image from "next/image";


function StoryCard({ name, src, profile }) {
    return (
        <div className="relative w-19 h-15 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x-auto p-3 
         transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
            <Image className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10" src={profile} alt="" height={40} width={40} layout="fixed" objectFit='cover'></Image>
            <Image className="object-cover filter brightness-75 rounded-full lg:rounded-3xl" src={src} alt="" layout="fill" ></Image>
            <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">{name}</p>
        </div>
    )
}

export default StoryCard
