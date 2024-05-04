import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const MainContent = () => {
  const [showCompanyDetails, setShowCompanyDetails] = useState('Intelegencia');
  const changeShowCompanyDetails = (companyName) => setShowCompanyDetails(companyName);
  return (
    <>
      <section className="max-w-[1000px] mb-[150px]">
        <div className="mb-[0.5rem]">
          <h1 className="text-[#64ffda] leading-[1.1] font-mono text-base font-normal pl-[4px]">
            Hi, my name is
          </h1>
        </div>
        <div className="mb-[0.5rem]">
          <h2 className="font-sans [font-size:_clamp(36px,8vw,80px)] leading-[1.1] font-semibold text-[#ccd6f6]">
            Ravi Shanker Shukla.
          </h2>
        </div>
        <div className="mb-[0.5rem]">
          <h2 className="font-sans [font-size:_clamp(36px,8vw,80px)] leading-[1.1] font-semibold text-[#8892b0]">
            I build things for the web.
          </h2>
        </div>
        <div className="mb-[1.5rem] max-w-[550px] pl-[4px]">
          <p className="font-sans text-lg md:text-xl text-[#8892b0] leading-[1.3]">
            I’m a Passioante software developer Currently looking for
            opportunities to learn and grow.I love to solve real world problems
            and I am skilled in frontend development and its libraries Currently
            working for{" "}
            <a
              href="https://www.thesparksfoundationsingapore.org/"
              target="_blank"
              rel="noreferrer"
              className="text-[#64ffda] font-sans text-lg md:text-xl no-underline hover:underline"
            >
              Intelegencia
            </a>
            .
          </p>
        </div>
        <div className="flex justify-center mb-[0.5rem] md:py-4 w-[150px] py-3 md:w-[200px] w-[140px] border-[#64ffda] text-[#64ffda] cursor-pointer border rounded font-mono text-sm tracking-wide leading-normal mt-[2.5rem] md:mt-[3rem]">
          <a
            href="/mailto:kg7741365@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Get in touch
          </a>
        </div>
      </section>
      <section className="md:pl-[100px] max-w-full md:max-w-[1000px] mb-[150px]">
        <div className="flex items-center md:gap-3 gap-1 no-wrap mb-[1.5rem]">
          <h2 className="font-sans [font-size:_clamp(20px,4vw,26px)] md:font-semibold font-normal text-[#64ffda]">
            01.
          </h2>
          <h2 className="font-sans [font-size:_clamp(26px,5vw,32px)] md:font-semibold font-normal text-[#ccd6f6]">
            About Me
          </h2>
          <div className="md:w-[250px] w-[150px] h-[1px] bg-[#233554]"></div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-x-12 gap-1">
          <div className=" md:w-[60%] w-full">
            <div>
              <p className="mb-4 font-sans text-lg md:text-xl text-[#8892b0] leading-[1.3]">
                Hello! My name is Kushagra and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2019 when I decided to join college and learnt how these
                websites look so dynamic and functional using HTML & CSS!
              </p>
              <p className="mb-4 font-sans text-lg md:text-xl text-[#8892b0] leading-[1.3]">
                Fast forward to today ,I have improved and learnt lot but still
                I am thriving for more improving bit by bit and day by day , An
                open source enthusiast and problem solver by heart always
                looking to learn and expand my knowledge, feel free to connect
                for inputs and collaborations.
              </p>
              <p className="mb-4 font-sans text-lg md:text-xl text-[#8892b0] leading-[1.3]">
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 text-[#8892b0]">
              <ul className="list-disc list-inside">
                <li className="mb-2">Next JS</li>
                <li className="mb-2">JavaScript (ES6+)</li>
                <li className="mb-2">C++</li>
                <li className="mb-2">ReactJs</li>
              </ul>
              <ul className="list-disc list-inside">
                <li className="mb-2">Sass</li>
                <li className="mb-2">Material UI</li>
                <li className="mb-2">Bootstrap</li>
                <li className="mb-2">Redux Toolkit</li>
              </ul>
            </div>
          </div>
          <div className="md:w-[40%] w-full relative">
            <div className="md:w-[90%] md:h-[90%] w-[90%] h-[90%]">
            <img src="https://portfolio-main-brown-seven.vercel.app/static/344aebb1aee6ca55c05ba70df186639e/ecff1/me.avif" alt="profile" className="" />
            </div>
            <div className="absolute left-[8%] z-10 top-[5%] md:w-[90%] md:h-[90%] w-[90%] h-[100%] overflow-hidden border-2 rounded-md border-[#64ffda]"></div>
          </div>
        </div>
      </section>
      <section className="md:pl-[200px] max-w-full md:max-w-[850px] mb-[150px]">
      <div className="flex items-center md:gap-3 gap-1 no-wrap mb-[1.5rem]">
          <h2 className="font-sans [font-size:_clamp(20px,4vw,26px)] md:font-semibold font-normal text-[#64ffda]">
            02.
          </h2>
          <h2 className="font-sans [font-size:_clamp(26px,5vw,32px)] md:font-semibold font-normal text-[#ccd6f6]">
            Where I've Worked
          </h2>
          <div className="md:w-[250px] w-[150px] h-[1px] bg-[#233554]"></div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="md:col-span-1 relative">
            <div className="bg-[#233554] w-[2px] h-[80px] absolute left-0 top-0"></div>
            <button onClick={() => changeShowCompanyDetails('Intelegencia')} className={`${showCompanyDetails === 'Intelegencia' ? 'border-l-[3.5px] border-solid border-[#64ffda]' : ''}  text-[#8892b0] hover:text-[#64ffda] px-7 py-2 font-sans font-medium text-base tracking-wide leading-normal`}>Intelegegencia</button>
            <button onClick={() => changeShowCompanyDetails('Jalan')} className={`${showCompanyDetails === 'Jalan' ? 'border-l-[3.5px] border-solid border-[#64ffda]' : ''}  text-[#8892b0] hover:text-[#64ffda] px-7 py-2 font-sans font-medium text-base tracking-wide leading-normal`}>Jalan Technology</button>
          </div>
          <div className="bg-pink-500 md:col-span-2">Work</div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
