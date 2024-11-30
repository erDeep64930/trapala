import { videoSectionInfo } from "@/app/constant/videoSectionInfo";
import Heading from "@/app/shared/Heading";
import Para from "@/app/shared/Para";
import Wrapper from "@/app/shared/Wrapper";
import WrapperSection from "@/app/shared/WrapperSection";
import Image from "next/image";
import React from "react";

const VideoSection = () => {
  return (
    <Wrapper>
      <Heading
        heading="High quality video, audio
& live classes"
      />
      <Para
        para="High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than
480 vertical scan lines or 576 vertical lines is considered high-definition."
      />

      <div className="bg-white p-4 relative rounded-md">
        <Image
          src="/lec.png"
          alt="video"
          width="1080"
          height="980"
          className="w-full h-full bg-center bg-cover"
        />

<Image
        src="/icons/call.svg"
        alt="icon"
        width="50"
        height="50"
        className="absolute left-[46%] bottom-6  md:bottom-16 w-10 h-10 bg-center bg-cover"
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2  p-4 my-4 mx-auto">
        {
          videoSectionInfo.map((item)=>{
            return(
<div key={item.id}>
  <div className="flex border border-pink-100 space-x-4 items-center">
    <Image src={item.pic} width={50} height={50} alt="icons"/>
    <p className="font-semibold">{item.desc}</p>

  </div>

</div>
            )
          })
        }

      </div>
     
    </Wrapper>
  );
};

export default VideoSection;
