import Image from "next/image";
import HeaderIcon from "../components/HeaderIcon";
import { BellIcon, ChevronDownIcon, SearchIcon, ViewGridIcon, ChatIcon } from "@heroicons/react/outline";
import {
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import {signOut, useSession } from "next-auth/client"



function Header(props) {
  const [session] = useSession()

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center flex-shrink">
        <div className="flex items-center">
          <Image
            src="/fb.png"
            width={40}
            height={40}
            alt=""
            layout="fixed"
          ></Image>
        </div>
    
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-5 w-5 text-gray-700"></SearchIcon>
          <input
            type="text"
            placeholder="search in facebook"
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
          ></input>
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active="true" Icon={HomeIcon}></HeaderIcon>
          <HeaderIcon Icon={FlagIcon}></HeaderIcon>
          <HeaderIcon Icon={PlayIcon}></HeaderIcon>
          <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
          <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
          <Image onClick={signOut} className="rounded-full cursor-pointer" src={session.user.image} width="40" height="40" layout="fixed"></Image>
          
          <p className="whitespace-normal  font-semibold pr-3">James Bond</p>
          <ViewGridIcon className="icon"></ViewGridIcon>
          <ChatIcon className="icon"></ChatIcon>
          <BellIcon className="icon"></BellIcon>
          <ChevronDownIcon className="icon"></ChevronDownIcon>
      </div>
    </div>
  );
}

export default Header;
