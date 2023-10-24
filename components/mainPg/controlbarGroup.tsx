import LoginBtn from "./btnFunction/loginBtn";
import LogOutBtn from "./btnFunction/logOutBtn";
import TodoModal from "./todo/todoModal";
import AllWhitenoise from "./whitenoise/allWhitenoise";
import ITodo from "@/icon/ITodo";

export default function ControlbarGroup() {
  return (
    <div className=" absolute top-[120px] right-8">
      <div className=" flex flex-col justify-around items-center w-9 space-y-5 py-3 bg-color_main_black rounded-md">
        <TodoModal />
        <AllWhitenoise />
        {/* user */}
        <LoginBtn />
        <LogOutBtn />
      </div>
    </div>
  );
}
