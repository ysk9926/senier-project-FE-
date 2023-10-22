import VolControler from "../btnFunction/bgVolBtn";
import VolMute from "../controlers";

export default function BgMusicControler() {
  return (
    <div className=" space-x-3 flex justify-between items-center px-8 ">
      {/* 음량조절 */}
      <VolControler />
      {/* 음소거 */}
      <VolMute />
    </div>
  );
}
