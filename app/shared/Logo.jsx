import Image from "next/image";


const Logo = () => {
  return (
    <div className="h-7 w-7 ">
      <Image
        src="/trapala.png"
        alt="logo"
        width="1080"
        height="1080"
        className="bg-cover w-full h-full rounded-full p-[2px]"
      />
    </div>
  );
};

export default Logo;
