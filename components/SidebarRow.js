import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <div className="inline-flex">
        <Image
          alt=""
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        ></Image><p className="hidden sm:inline-flex font-medium flex pl-3 text-left">{title}</p></div>
        
      )}

      {Icon && (
        <div className="inline-flex">
          <Icon
            className="h-7 text-blue-500 text-left"></Icon>
          <p className="hidden sm:inline-flex font-medium flex pl-3 text-left">{title}</p>
        </div>
      )}
    </div>
  );
}

export default SidebarRow;
