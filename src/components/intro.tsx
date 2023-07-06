import clsx from "clsx"
import Link from "next/link"

const Intro = ({dark} : {dark : boolean}) => {
  return (
    <>
      <div className="w-[100%] container flex flex-col items-center justify-center gap-16 px-4 py-32 text-center">
        <h1 className={clsx("text-5xl font-extrabold tracking-tight) sm:text-[5rem]",dark?"text-white":"text-black")}>
          More <span className={dark?"text-blue-400":"text-rose-800"}>About Me</span>!
        </h1>
        <div className="md:w-[80%] sm:w-[100%] container flex flex-col items-center justify-center px-8 gap-8">

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] sm:text-[1.5rem]", dark ? "text-white" : "text-black")}>
              🤔 Who am I?
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Hi! I'm <b>KK</b>, a passionate problem solver wielding the power of mathematics and artificial intelligence. 
              I also go by my given name <b>Punnawish Thuwajit</b> or my online persona <b>Kuroma (クロマ)</b>.
            </p>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Right now, I'm a sophomore at UW-Madison in mathematics and computer sciences.
              I love tinkering with massive amounts of data and deriving solutions out of how those data are structured - like gathering the big picture and then connecting the dots!
              I find machine learning tools to be a perfect for this cause. You can explore this aspect in <Link href="/research"><b>my research interests</b></Link>.
            </p>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              I'm from Madison, Wisconsin, though I mostly grow up in Thailand. As such, I'm bilingual with equal proficiencies in Thai and English.
            </p>
          </div>

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] sm:text-[1.5rem]", dark ? "text-white" : "text-black")}>
              🚀 My Hobbies
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Outside of school and research, I would often find myself doing origami.
              I have always been boggled by the fact one can meticulously craft a square sheet of paper into any creation of their desires.
              You can find out the answer with me on <Link href="/origami"><b>my journey through origami</b></Link>.
            </p>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Alongside origami, I find Japanese art and entertainment particularly interesting. I really like listening to J-pop and reading mangas in my free time.
              I'm also learning Japanese, which would effectively make me trilingual!
            </p>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              I've also recently picked up web development as seen with this site!
            </p>
          </div>

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] sm:text-[1.5rem]", dark ? "text-white" : "text-black")}>
              ⚙️ Skills and Experiences
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Academics and Technology
            </p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro;