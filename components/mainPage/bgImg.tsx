import Image from "next/image";
import 자동차 from "../../image/자동차.png";
import 사람 from "../../image/사람.png";
import 바텐더 from "../../image/바텐더.png";

export default function BgImg() {
  return (
    <div className=" flex justify-center lg:justify-between items-end space-x-10 w-full absolute bottom-[10%] px-20">
      {/* 자동차 */}
      <div className=" hidden xl:block w-img_2xl h-img_2xl relative">
        <Image src={자동차} alt="car img" fill={true} />
      </div>
      {/* 사람 */}
      <div className=" w-[460px] h-[310px] relative -z-10">
        <Image src={사람} alt="car img" fill={true} />
      </div>
      {/* 바텐더 */}
      <div className=" hidden min-[820px]:block w-[350px] h-img_2xl relative">
        <Image src={바텐더} alt="car img" fill={true} />
      </div>
    </div>
  );
}
