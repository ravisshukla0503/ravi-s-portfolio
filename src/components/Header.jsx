const Header = () => {
  return (
      <nav className="hidden md:flex items-center justify-end pr-[5%] h-full">
        <ol className="flex flex-row mx-[1.2rem]">
          <li className="mx-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-0">
            <span className="text-[#64ffda] pr-[5px] font-mono text-sm tracking-wide leading-normal">01.</span><a href="#" className="text-[#ccd6f6] font-mono text-sm tracking-wide leading-normal">Home</a>
          </li>
          <li className="mx-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-1000">
          <span className="text-[#64ffda] pr-[5px] font-mono text-sm tracking-wide leading-normal">02.</span><a href="#" className="text-[#ccd6f6] font-mono text-sm tracking-wide leading-normal">About</a>
          </li>
          <li className="mx-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-200">
          <span className="text-[#64ffda] pr-[5px] font-mono text-sm tracking-wide leading-normal">03.</span><a href="#" className="text-[#ccd6f6] font-mono text-sm tracking-wide leading-normal">Contact</a>
          </li>
          <li className="mx-[1.2rem] [&_a]:hover:text-[#64ffda] transition delay-300">
          <span className="text-[#64ffda] pr-[5px] font-mono text-sm tracking-wide leading-normal">04.</span><a href="#" className="text-[#ccd6f6] font-mono text-sm tracking-wide leading-normal">Projects</a>
          </li>
        </ol>
        <button className="text-[#64ffda] hover:bg-[#0d203cd9] border-[#64ffda] border px-3 py-2 rounded font-mono text-sm tracking-wide leading-normal transition delay-500">
          Resume
        </button>
      </nav>
  )
};

export default Header;
