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
      {/* car-sound */}
      <div
        className="
        absolute flex justify-center items-center
        xl:top-[55%] xl:left-[17%]
        top-[20%] left-[3%]
        "
      >
        <button
          id="carBtn"
          className="w-6 h-6 rounded-full border border-white hover:border-2"
          onClick={CarsoundHandler}
        ></button>
        <label
          htmlFor="carBtn"
          className="ml-3 w-fit h-6 px-3 py-4 rounded-md bg-[#36323130] flex justify-center items-center text-color_main_text hover:scale-[1.1] hover:ml-4"
        >
          City Trafic
        </label>
      </div>
      {/* people-sound */}
      <div
        className="
          absolute flex justify-center items-center
          xl:top-[50%] xl:left-[54%]
          min-[820px]:top-[50%] min-[820px]:left-[25%]
          top-[26%] left-[3%]
        "
      >
        <button
          id="peopleBtn"
          className="w-6 h-6 rounded-full border border-white hover:border-2"
          onClick={PeoplesoundHandler}
        ></button>
        <label
          htmlFor="peopleBtn"
          className="ml-3 w-fit h-6 px-3 py-4 rounded-md bg-[#E5583530] flex justify-center items-center text-color_main_text hover:scale-[1.1] hover:ml-4"
        >
          Whispers people
        </label>
      </div>
      {/* cityRain-sound */}
      <div
        className="
        absolute flex justify-center items-center
        xl:top-[38%] xl:left-[23%]
        top-[14%] left-[3%]
        "
      >
        <button
          id="cityRainBtn"
          className="w-6 h-6 rounded-full border border-white hover:border-2"
          onClick={RainsoundHandler}
        ></button>
        <label
          htmlFor="cityRainBtn"
          className="ml-3 w-fit h-6 px-3 py-4 rounded-md bg-[#2A6AAA30] flex justify-center items-center text-color_main_text hover:scale-[1.1] hover:ml-4"
        >
          City Rain
        </label>
      </div>
    </div>
  );
}
