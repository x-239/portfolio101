export default function Experince() {
  return (
    <div className="justify-center flex">
      <div className=" relative mx-auto">
        <img src="SKILLS(1).svg" alt="myskills" />
        <div className=" absolute top-[15%] right-[40.5%] group">
          <img
            src="React.svg"
            alt="rectimg"
            className=" group-hover:animate-bounce transition-all "
          />
          <span className="text-white text-xs hidden group-hover:block bg-black absolute opacity-70 px-1 py-2 -top-5.5 -translate-y-1/2 rounded-full -ml-2">
            React+2
          </span>
        </div>
        <div className="absolute top-[15.3%] right-[52.3%] group hover:animate-bounce">
          <img
            src="JS.svg"
            alt="jsimg"
            className="hover:animate-bounce delay-700"
          />
          <span className="text-white text-xs hidden group-hover:block bg-black absolute opacity-70 px-1 py-2 -top-5.5 -translate-y-1/2 rounded-full -ml-6">
            JavaScript+2
          </span>
        </div>
        <div className="absolute top-[15.8%] right-[57.99%] group">
          <img src="NEXT.svg" alt="nextimg" className="hover:animate-bounce" />
          <span className="text-white text-xs hidden group-hover:block bg-black absolute opacity-70 px-1 py-2 -top-5.5 -translate-y-1/2 rounded-full -ml-6">
            NEXT.TSX+2
          </span>
        </div>
        <div className="absolute top-[15.5%] right-[46%] group">
          <img
            src="Tailwind.svg"
            alt="tailwindimg"
            className="hover:animate-bounce"
          />
          <span className="text-white text-xs hidden group-hover:block bg-black absolute opacity-70 px-1 py-2 -top-5.5 -translate-y-1/2 rounded-full -ml-4">
            TailWind+2
          </span>
        </div>
        <div className="absolute top-[22.3%] right-[32.3%] animate-bounce">
          <img 
          src="NODE.svg" 
          alt="nodeimg" />
        </div>
        <div className="absolute top-[22%] right-[39.1%] animate-bounce">
          <img 
          src="GIT.svg" 
          alt="gitimg" />
        </div>
        <div className="absolute top-[21.7%] right-[45.6%] animate-bounce">
          <img 
          src="HTML.svg" 
          alt="htmlimg" />
        </div>
        <div className="absolute top-[22%] right-[52.3%] animate-bounce">
          <img 
          src="FIGMA.svg" 
          alt="figmaimg" />
        </div>
        <div className="absolute top-[21.4%] right-[57.3%] animate-bounce">
          <img src="CSS.svg" alt="cssimg" />
        </div>
        <div className="absolute top-[22%] right-[63.3%] animate-bounce">
          <img src="GITHUB.svg" alt="githubimg" />
        </div>
      </div>
    </div>
  );
}
