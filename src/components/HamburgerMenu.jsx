import { useState } from "react";

const HamburgerMenu = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <div className={`md:hidden flex items-center h-full w-full justify-end pr-[5%] ${isOpen ? "hidden" : "block"}`}>
        <i className="fa-solid fa-bars text-[#64ffda] text-3xl" onClick={() => setIsOpen(!isOpen)}></i>
      </div>
      <aside className={`${isOpen ? "translate-x-0" : "translate-x-full"} z-10 h-[100vh] w-[75vw] max-w-[400px] fixed top-0 right-0 transition duration-700 ease-in-out bg-[#163c75d9] index-10 bg-[#0a192f]`}>
        <div className="bg-[#163c75d9]">
        <i className="fa-solid fa-xmark text-[#64ffda] text-3xl absolute right-[5%] top-[5%]" onClick={() => setIsOpen(!isOpen)}></i>
        </div>
        <nav className="flex flex-col items-center justify-center h-full w-full mb-[1rem]">
        <ol className="flex flex-col my-[1.2rem]">
          <li className="flex items-center justify-center flex-col my-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-0">
            <div className="text-[#64ffda] pr-[5px] font-mono text-lg tracking-wide leading-normal">01.</div><a href="#" className="text-[#ccd6f6] font-mono text-lg tracking-wide leading-normal">Home</a>
          </li>
          <li className="flex items-center justify-center flex-col my-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-1000">
          <span className="text-[#64ffda] pr-[5px] font-mono text-lg tracking-wide leading-normal">02.</span><a href="#" className="text-[#ccd6f6] font-mono text-lg tracking-wide leading-normal">About</a>
          </li>
          <li className="flex items-center justify-center flex-col my-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-200">
          <span className="text-[#64ffda] pr-[5px] font-mono text-lg tracking-wide leading-normal">03.</span><a href="#" className="text-[#ccd6f6] font-mono text-lg tracking-wide leading-normal">Contact</a>
          </li>
          <li className="flex items-center justify-center flex-col my-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-300">
          <span className="text-[#64ffda] pr-[5px] font-mono text-lg tracking-wide leading-normal">04.</span><a href="#" className="text-[#ccd6f6] font-mono text-lg tracking-wide leading-normal">Projects</a>
          </li>
        </ol>
        <button className="text-[#64ffda] hover:bg-[#0d203cd9] border-[#64ffda] border px-7 py-2 rounded font-mono text-lg tracking-wide leading-normal transition delay-500">
          Resume
        </button>
      </nav>
      </aside>
    </>
  );
};

export default HamburgerMenu;
