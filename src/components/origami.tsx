import clsx from "clsx"
import Image from 'next/image'

const Origami = ({ dark }: { dark: boolean }) => {
  return (
    <>
      <div className="w-[100%] container flex flex-col items-center justify-center gap-16 px-4 py-32 text-center">
        <h1 className={clsx("md:text-[5rem] text-[3rem] font-extrabold tracking-tight", dark ? "text-white" : "text-black")}>
          My <span className={dark ? "text-blue-500" : "text-rose-800"}>Origami</span> Creations!
        </h1>
        <div className="md:w-[80%] w-[100%] container flex flex-col items-center justify-center px-8 gap-8">

            <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
              <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
                🤔 What is origami?
              </h2>
              <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                Origami is the art of paper folding, originating from two Japanese words "ori" meaning "to fold" and "gami/kami" meaning "paper". 
                Appearing as a branch of art, origami itself dives far more than following the traditions. From astonising representation models to stunning tesselations, 
                origami sits comfortably as a midpoint of mathematics, engineering, and abstract designs.
              </p>
              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                However, amidst freedom in designs and presentations, origami always follow a rule of thumb: <strong>A model must be made from one (or more) uncut square (or rectangular) sheet of paper!</strong> 
              </p>
            </div>

            <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
              <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
                ⭐ How I got into origami?
              </h2>
              <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                Origami was introduced to me due to my short attention span (ironically). My first ever model, taught personally by my dad, is the tradition crane (tsuru). 
                I adapted further from cranes to more complex designs via the origami books my parents bought. As piles of paper animals built up, origami gradually became my hobby.
              </p>
              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                After a few years into origami, my parents bought me a computer. Nine years old me didn't wait long before he started searching for even cooler origami models online. 
                One subject in particular piequed my interest - dragons! My first ever "complex" origami comes in the form of Kade Chan's Fiery dragon (which, in fact, is still my go-to dragon to fold for show).
                My proudest accomplishment was the first fold of the origami master Satoshi Kamiya's Ancient dragon 1.0! A picture of that exact model is shown just right down here (as memorial of starting Ancient dragon 2.0). 
              </p>
              <div className="container flex flex-row items-center justify-center ">
                <Image src={require("@/images/origami/AD_old_new.png")} alt="image" 
                  style={{objectFit:"contain"}}
                  className={"rounded-2xl shadow-xl w-auto"}
                />
              </div>
              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                Also... just admire smol KK "folding" a flower for his mom :)
              </p>
              <div className="container flex flex-row items-center justify-center ">
                <Image src={require("@/images/origami/smol_kk.png")} alt="image" 
                  style={{objectFit:"contain"}}
                  className={"rounded-2xl shadow-xl w-60 md:w-30"}
                />
              </div>
            </div>

            <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
              <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
                🖼️ Some of my creations
              </h2>
              <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>

              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                <b>Armored Dragon 1.0 (designed 2022)</b>
                <p>
                  This twist to the three headed dragon. I repurposed the dragon's two rear head into oversized wings. 
                  This allowed the old wings to be constructed into a pair of longer legs - giving the final product a slender look. 
                  The remaining flaps are then pleated and shaped into armor throughout the dragon's body. 
                  Certain ratios and shaping were still finicky though, especially those reshaped from the three headed dragon.
                </p>
              </p>
              <div className="container flex flex-row items-center justify-center ">
                <Image src={require("@/images/origami/armored.png")} alt="image" 
                  style={{objectFit:"contain"}}
                  className={"rounded-2xl shadow-xl w-auto"}
                />
              </div>

              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                <b>Three Headed Dragon 3.0 (designed 2022)</b>
                <p>
                  The final iteration of the three-headed dragon following many tries, this model mainly used 22.5 designs for the main structures while incorporating details via 32-box grids around the corners. 
                  The torso design mirrors Satoshi Kamiya's divine dragon for a bulky stature. I wasn't entirely satisfied with the how small the wings ended up being though.
                </p>
              </p>
              <div className="container flex flex-row items-center justify-center ">
                <Image src={require("@/images/origami/3headed.png")} alt="image" 
                  style={{objectFit:"contain"}}
                  className={"rounded-2xl shadow-xl w-auto"}
                />
              </div>

              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                <b>Nazgul (designed 2022)</b>
                <p>
                  The early stages of messing with the three headed dragon base, I shaped the structure into a person riding a horse and it turned out well. 
                  I'll give this model a revisit and refinement in the future.
                </p>
              </p>
              <div className="container flex flex-row items-center justify-center ">
                <Image src={require("@/images/origami/nazgul.png")} alt="image" 
                  style={{objectFit:"contain"}}
                  className={"rounded-2xl shadow-xl w-auto"}
                />
              </div>

              <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
                <b>Medieval King (designed 2022)</b>
                <p>
                  The first every model I consider my original design, this model applies partial 32-box grid to a 22.5 human base (an idea that became my signature later on). 
                  The model was designed to support its own weight and stand upright. Armor parts were added at the end.
                </p>
              </p>
              <div className="container flex flex-row items-center justify-center ">
                <Image src={require("@/images/origami/king.png")} alt="image" 
                  style={{objectFit:"contain"}}
                  className={"rounded-2xl shadow-xl w-auto"}
                />
              </div>
            </div>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              ...and several more I've yet to cover!
            </p>
            <div className={clsx("gap-4 font-bold",dark ? 'text-white' : 'text-black')}>
              <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
              <p>© 2023 | KK (Punnawish Thuwajit)</p>
              <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
          </div>
        </div>
      </div>
    </>
  )
}

export default Origami;