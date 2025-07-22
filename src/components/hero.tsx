export default function Hero() {
  return (
    <div>
      <div className=" flex-col justify-self-center h-full pr-50 pt-10 ">
        <div className=" right-[9%] relative top-10   ">
          <img src="/Ellipse 3.svg" alt="elsipeimg" />
        </div>
        <div className=" absolute  bottom-[53%] w-[150px]">
          <img src="/Me.svg" alt="meimg" />
        </div>
        <div className=" relative left-[17%] -translate-y-69 top-10 ">
          <img src="/Arrow.svg" alt="arrowimg" />
          <div className=" absolute translate-x-15 top-4 flex items-center ">
            <p className=" text-xs text-white font-semibold"> Hey there 👋 </p>
            <p className=" text-xs text-purple-400 font-semibold ">
              , im Abdulnour{" "}
            </p>
            <p className=" text-sm text-white font-semibold translate-y-12   ">
              {" "}
              A programmer{" "}
            </p>
          </div>
          <div className=" relative translate-x-20 bottom-6 ">
            <p className=" text-white text-3xl font-bold ">
              {" "}
              who judge's the cover{" "}
            </p>
            <p className=" text-white text-3xl font-bold "> by its Book</p>
          </div>
          <section className="h-screen flex justify-center p-10 ">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">A self-taught Web Dev </h1>
              <p className="text-xl max-w-xl mx-auto">
                I’m a frontend developer crafting clean and creative web
                experiences.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
