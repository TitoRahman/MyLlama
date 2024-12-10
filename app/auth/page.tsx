import { SiOllama } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";

function Page() {
  function handleLogin() {
    console.log("Login");
  }
  return (
    <div
      className={"w-screen h-screen flex justify-center items-center flex-col"}
    >
      <div className="flex flex-col items-center h-1/2 justify-around">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white text-black flex justify-center items-center rounded-full ">
            <SiOllama size={56} />
          </div>
          <div className={"text-center"}>
            <p className={"font-bold text-2xl"}>Welcome</p>
            <p className={"text-l"}>This is a demo web for Ollama 3.2</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <div className="bg-neutral-900 rounded flex items-center pr-1">
            <input
              type={"email"}
              placeholder={"Email"}
              className={"p-2 bg-neutral-900 outline-0 rounded "}
            />
            <div className="bg-black text-white p-2 rounded border border-neutral-800 hover:">
              <AiOutlineEnter size={16} />
            </div>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className={"w-full h-0.5 bg-neutral-600 rounded-full"} />
            <p className={"text-neutral-200 flex-1 text-sm"}>OR</p>
            <div className={"w-full h-0.5 bg-neutral-600 rounded-full"} />
          </div>
          <div className="flex gap-8">
            <button className="h-12 w-12 bg-neutral-900 text-white flex justify-center items-center rounded-full ">
              <FaGoogle size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
