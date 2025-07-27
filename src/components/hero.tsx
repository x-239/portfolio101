import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex flex-col justify-self-center h-full pt-5 ">
      {/* Photo section */}
      <div className=" right-[8%] relative top-13   ">
        <img src="/Ellipse 3.svg" alt="elsipeimg" />
      </div>
      <div className="absolute  bottom-[55%] w-[150px]">
        <Link href="/">
          <img src="/Me.svg" alt="meimg" />
        </Link>
      </div>
      {/* About me section */}
      <div className="relative left-[17%] -translate-y-69 top-10">
        <img src="/Arrow.svg" alt="arrowimg" />
        <div className="absolute translate-x-15 top-4 flex items-center">
          <p className="text-xs text-white font-semibold"> Hey there 👋 </p>
          <p className="text-xs text-purple-400 font-semibold">
            , im Abdulnour
          </p>
        </div>
        <div className="relative translate-x-20 bottom-8">
          <p className="text-fuchsia-500 text-3xl font-bold"> A programmer </p>
          <p className="text-white text-3xl font-bold">who </p>
          <p className="text-white text-3xl font-bold"> loves coding</p>
        </div>
        <div className="flex flex-col text-center mt-12 gap-5">
          <h1 className="text-white text-5xl font-bold ">ENG.Abdulnour</h1>
          <p className="text-white bg-black opacity-70 rounded-full">
            "Passionate front-end developer with hands-on experience in modern
            frameworks."
          </p>
          <p className="text-white bg-black opacity-70 rounded-full">
            {" "}
            "Self-taught developer who thrives on solving real-world problems."{" "}
          </p>
          <p className="text-white bg-black opacity-70 rounded-full">
            "Building responsive, dynamic UIs with React and Tailwind CSS."
          </p>
        </div>
      </div>
    </div>
  );
}
