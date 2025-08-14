import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col justify-self-center h-screen pt-5 ">
      {/* Photo section */}
      <div className="right-[8%] relative top-13 items-center">
        <Image src="/Ellips.svg" alt="elsipeimg" width={250} height={200} />
      </div>
      <div className="relative flex items-center h-screen bottom-[20%] w-[150px]">
        <Link href="/">
          <Image src="/Me.svg" alt="meimg" width={200} height={100} />
        </Link>
      </div>
      {/* About me section */}
      <div className="relative left-[17%] -translate-y-100 top-10 h-screen">
        <Image src="/Arrow.svg" alt="arrowimg" width={150} height={100} />
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
          <h1 className="text-white text-5xl font-bold ">Eng.Abdulnour</h1>
          <p className="text-white bg-black opacity-70 rounded-full">
            &quot;Passionate front-end developer with hands-on experience in modern
            frameworks.&quot;
          </p>
          <p className="text-white bg-black opacity-70 rounded-full">
            &quot;Self-taught developer who thrives on solving real-world problems.&quot;
          </p>
          <p className="text-white bg-black opacity-70 rounded-full">
            &quot;Building responsive, dynamic UIs with React and Tailwind CSS.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
