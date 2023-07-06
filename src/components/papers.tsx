import clsx from "clsx"

const Papers = ({ dark }: { dark: boolean }) => {
  return (
    <>
      <div className="w-[100%] container flex flex-col items-center justify-center gap-16 px-4 py-32 text-center">
        <h1 className={clsx("text-5xl font-extrabold tracking-tight) sm:text-[5rem]",dark?"text-white":"text-black")}>
          My <span className={dark?"text-blue-400":"text-rose-800"}>Research</span> Interests!
        </h1>
        <div className="md:w-[80%] sm:w-[100%] container flex flex-col items-center justify-center px-8 gap-8">

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] sm:text-[1.5rem]", dark ? "text-white" : "text-black")}>
              📖 Publications
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Papers go BRRRR
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Papers;