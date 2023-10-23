import BgMusicController from "../btnFunction/bgMusicControler";
import VolMute from "../controlers";

export default function BgMusicControler() {
  return (
    <div className=" space-x-3 flex justify-between items-center px-8 ">
      {/* 음량조절 */}
      <BgMusicController />
      {/* 음소거 */}
      <VolMute />
    </div>
  );
}
