import clsx from "clsx"

const Origami = ({ dark }: { dark: boolean }) => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-16 px-4 py-32 ">
        <h1 className={clsx("text-5xl font-extrabold tracking-tight) sm:text-[5rem]", dark ? "text-white" : "text-black")}>
          My <span className={dark ? "text-blue-500" : "text-rose-800"}>Origami</span> Creations!
        </h1>
      </div>
    </>
  )
}

export default Origami;