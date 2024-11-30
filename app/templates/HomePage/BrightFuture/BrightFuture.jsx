import Heading from "@/app/shared/Heading";
import Para from "@/app/shared/Para";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";

const BrightFuture = () => {
  return (
    <Wrapper>
      <div className="flex flex-col border-2 px-20 py-8 rounded-bl-[82px] rounded-tr-[82px] mb-4">
        <Heading heading="Become an instructor with Bright Future Platform" />
        <Para
          para="Unlock your potential and share your expertise with learners worldwide! The Bright Future Platform offers you the perfect opportunity to inspire and educate while earning from your knowledge. Create engaging courses, connect with a global audience, and make a lasting impact on countless lives. Whether you're an experienced professional or a passionate teacher, this is your chance to turn your skills into success.

Join us today and pave the way for a brighter future—both for you and your students!"
        />
        <button className="text-lg font-semibold px-5 py-2 border border-red-300   max-w-max rounded-2xl hover:text-red-400 bg-red-200 hover:bg-transparent">Your Details</button>
      </div>

      
    </Wrapper>
  );
};

export default BrightFuture;
