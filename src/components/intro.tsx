import clsx from "clsx"
import Link from "next/link"
import Image from 'next/image'

const Logo = ({path} : {path : string}) => {
  return <Image src={path} alt="logo" 
    style={{objectFit:"contain"}}
    className={"rounded-2xl shadow-xl h-20 w-20"}
  />
}

const Intro = ({dark} : {dark : boolean}) => {
  return (
    <>
      <div className="w-[100%] container flex flex-col items-center justify-center gap-16 px-4 py-32 text-center">
        <h1 className={clsx("md:text-[5rem] text-[3rem] font-extrabold tracking-tight",dark?"text-white":"text-black")}>
          More <span className={dark?"text-blue-500":"text-rose-800"}>About Me</span>!
        </h1>
        <div className="md:w-[80%] w-[100%] container flex flex-col items-center justify-center px-8 gap-8">

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
              🤔 Who am I?
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Hi! I'm <b>KK Thuwajit</b>, a passionate problem solver wielding the power of mathematics and artificial intelligence. 
              I also go by my online persona <b>Kuroma (クロマ)</b>
            </p>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
            こんにちは、ケイケイと申します、クロマは呼んでください。AIや数学について興味がたくさんあるので、ぜひ、話し合いま！
            </p>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Right now, I'm a sophomore at UW-Madison in mathematics and computer sciences.
              I love tinkering with massive amounts of data and deriving solutions out of how those data are structured - like gathering the big picture and then connecting the dots!
              I find machine learning tools to be a perfect for this cause. You can explore this aspect in <Link href="/research"><b>my research interests</b></Link>.
            </p>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              I'm from Madison, Wisconsin, though I mostly grow up in Thailand. As such, I'm bilingual with equal proficiencies in Thai and English.
            </p>
          </div>

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
              🚀 My Hobbies
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Outside of school and research, I would often find myself doing origami.
              I have always been boggled by the fact one can meticulously craft a square sheet of paper into any creation of their desires.
              You can find out the answer with me on <Link href="/origami"><b>my journey through origami</b></Link>.
            </p>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Alongside origami, I find Japanese art and entertainment particularly interesting. I really like listening to J-pop and reading mangas in my free time.
              I'm also learning Japanese, which would effectively make me trilingual! (Update: around N5 level at this moment、ファイトです！)
            </p>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              I've also recently picked up web development as seen with this site!
            </p>
          </div>

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
              ⚙️ Skills and Expertise
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              I began my academic career with <strong>competitive mathematics</strong>, that refers to math contests leading
              up to the prestigious International Mathematics Olympiad (IMO). I progressed through this olympiad route up to the
              IMO final selection, learning several <strong>proof-based</strong> mathematics concepts along the way. The favorite
              technique I learned is inversion geometry, which is the transformation of geometric objects under distance inversion
              from a circle - this allows amazing conversions to be made (i.e. converting tangent circles into parallel lines!).
            </p>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Around the start of the COVID-19 pandemic, I picked up <strong>machine learning</strong> and thus began <strong>programming</strong> as a whole. 
              Python is the first (and primary) programming language I learned, since most state-of-the-art machine learning tools are wrapped as python libraries. 
              From here, I begin my adventures through machine learning research and projects! Here is a short list of programming languages and tools I've used since then:
            </p>
            <div className="container flex flex-row items-center justify-center gap-8 scale-50 md:scale-100">
              <Logo path={require("@/images/logo/python.png")}/>
              <Logo path={require("@/images/logo/torch.png")}/>
              <Logo path={require("@/images/logo/tf.png")}/>
              <Logo path={require("@/images/logo/numpy.png")}/>
              <Logo path={require("@/images/logo/js.png")}/>
              <Logo path={require("@/images/logo/ts.png")}/>
              <Logo path={require("@/images/logo/java.png")}/>
            </div>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              Further details on my works and expertise can be found <Link href="/resume.pdf" target="_blank"><b>here!</b></Link>.
            </p>
          </div>

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
            💡 Trivia!
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li>
                My actual name is <strong>Konk(r)uad</strong> (Thai: ก้อนกรวด) which can be pretty challenging to pronounce. 
                The literal translation is "pebble", highlighting my parents' desire for me to lead a grounded life and to admire reality as is! 
              </li>
              <li>
                My favorite show is <strong>Code Geass</strong>, a Japanese anime about a prince persumed dead and his crusade to take over his father's corrupt empire. 
                The show has well-executed mecha fight scenes. absolutely amazing protagonist, and a conclusive ending, though some plot points may be written too hastily.
              </li>
            </ul>
          </div>
          <div className={clsx("gap-4 font-bold",dark ? 'text-white' : 'text-black')}>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p>© 2024 | P. KK Thuwajit</p>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro;