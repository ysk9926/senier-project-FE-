"use client";

export default function BgImgBtn() {
  const CarsoundHandler = () => {
    return null;
  };
  const RainsoundHandler = () => {
    return null;
  };
  const PeoplesoundHandler = () => {
    return null;
  };
  return (
    <div>
      {/* test */}
      {/* car-sound */}
      <label
        className="
        absolute flex justify-center items-center hover:scale-[1.1]
        xl:top-[55%] xl:left-[17%]
        top-[20%] left-[3%]
        "
      >
        <button
          className="w-6 h-6 rounded-full border border-white hover:border-2"
          onClick={CarsoundHandler}
        ></button>
        <span className="ml-3 w-fit h-6 px-3 py-4 rounded-md bg-[#36323130] flex justify-center items-center text-color_main_text  ">
          City Trafic
        </span>
      </label>
      {/* people-sound */}
      <label
        className="
          absolute flex justify-center items-center hover:scale-[1.1]
          xl:top-[50%] xl:left-[54%]
          min-[820px]:top-[50%] min-[820px]:left-[25%]
          top-[26%] left-[3%]
        "
      >
        <button
          className="w-6 h-6 rounded-full border border-white hover:border-2"
          onClick={PeoplesoundHandler}
        ></button>
        <label className="ml-3 w-fit h-6 px-3 py-4 rounded-md bg-[#E5583530] flex justify-center items-center text-color_main_text  ">
          Whispers people
        </label>
      </label>
      {/* cityRain-sound */}
      <label
        className="
        absolute flex justify-center items-center hover:scale-[1.1]
        xl:top-[38%] xl:left-[23%]
        top-[14%] left-[3%]
        "
      >
        <button
          className="w-6 h-6 rounded-full border border-white hover:border-2"
          onClick={RainsoundHandler}
        ></button>
        <label className="ml-3 w-fit h-6 px-3 py-4 rounded-md bg-[#2A6AAA30] flex justify-center items-center text-color_main_text">
          City Rain
        </label>
      </label>
    </div>
  );
}
