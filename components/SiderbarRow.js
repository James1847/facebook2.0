import Image from "next/image";

function SiderbarRow({ src, Icon, title }) {
  return (
    <div>
      {src && (
        <Image
          alt=""
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        ></Image>
      )}
    </div>
  );
}

export default SiderbarRow;
