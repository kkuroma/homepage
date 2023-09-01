import clsx from "clsx"
import Link from "next/link";
import { useState } from 'react'

const PaperEntry = ({ 
  dark,
  paperName,
  journal,
  year,
  citation,
  url,
  desc,
 } : {
  dark : boolean,
  paperName : string,
  journal : string,
  year : string,
  citation : string,
  url : string, 
  desc : string, 
 }) => {
  const [visible, setVisible] = useState(false)
  return <>
  <div className={clsx("md:text-[1.15rem] text-[0.8rem] rounded-2xl text-center", dark ? "bg-white/20 text-white":"bg-black/5 text-black")}>
    <p className="mt-4 ml-6 mr-6 mb-2 font-bold">{paperName}</p>
    <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
    <p className="ml-6 mr-6 mt-2">{year} - {journal}</p>
    <p className="mb-4 ml-6 mr-6"><Link href={url}>🔗 Article</Link> || <button onClick={() => navigator.clipboard.writeText(citation)}>📁 Copy Citation</button> || <button onClick={()=>{setVisible(!visible)}}>☰ {visible ? "Hide" : "Show"} Description</button></p>
    <p className={clsx("text-start mb-4 ml-6 mr-6", visible ? "" : "hidden")}>{desc}</p>
  </div>
  </>
 }

const Papers = ({ dark }: { dark: boolean }) => {
  return (
    <>
      <div className="w-[100%] container flex flex-col items-center justify-center gap-16 px-4 py-32 text-center">
        <h1 className={clsx("md:text-6xl text-4xl font-extrabold tracking-tight) text-[5rem]",dark?"text-white":"text-black")}>
          My <span className={dark?"text-blue-500":"text-rose-800"}>Research</span> Interests!
        </h1>
        <div className="md:w-[80%] w-[100%] container flex flex-col items-center justify-center px-8 gap-8">

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
              💡 Research Experiences
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2023-present) Computer Sciences Department, UW-Madison, USA</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li> 
                I joined the AI and computer vision lab under Prof. Yong Jae Lee after taking his course: CS639 deep learning in computer vision.
              </li>
              <li> 
                I'm currently working on improving the generative results of Stable Diffusion within a limited amount of fine tuning data.
              </li>
            </ul>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2022-present) Waisman Brain Imaging Center, UW-Madison, USA</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li> 
                I joined the lab through "informatics skunkworks", a UW-Madison program in matching students with a research team in machine learning. I'm currently working as an undergraduate RA here.
              </li>
              <li> 
                My current project is a low-rank MRI denoiser and T1 prediction pipeline from short-time (2 minutes) acquired MRI. This allows MRI acquisition time to be cut down by over 80%.
              </li>
            </ul>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2021-2022) NXPO, Thailand</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li>
                NXPO is a Thai governmental organization resposible for the distribution of research fundings.
              </li>
              <li> 
                I interned as an AI engineer and worked on predicting potentially active research areas based on the number of papers over the past 10 years.
              </li>
              <li>
                My team and I implemented an unsupervised approach to group a large number of papers into many categories using hints from citations.
              </li>
            </ul>
            <p className={clsx("md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2020-present) Information Sciences and Technology, VISTEC, Thailand</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li> 
                I joined the lab as a high-school student during my early stages into research. The lab, Interfaces (under Prof. Theerawit Wilaiprasitporn), is specialized in biomedical signal processing via machine learning algorithms, 
                aligning with my interest in machine learning and use cases in medicine.
              </li>
              <li>
                My first project and paper was a novel and accurate seizure detection model using EEG (brain) signals.
              </li>
              <li>
                I'm currently interested in vital signs monitoring via the PPG signals (the one used in smartwatches and pulse oximeters), having published one paper on the topic.
              </li>
            </ul>
          </div>

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] text-[1.5rem]", dark ? "text-white" : "text-black")}>
              📖 Publications
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <PaperEntry
              dark = {dark}
              paperName = {"RRWaveNet: A Compact End-to-End Multi-Scale Residual CNN for Robust PPG Respiratory Rate Estimation"}
              journal = {"IEEE Internet of Things Journal"}
              year = {"2023"}
              citation = {"Osathitporn, P., Sawadwuthikul, G., Thuwajit, P., Ueafuea, K., Mateepithaktham, T., Kunaseth, N., ... & Wilaiprasitporn, T. (2023). RRWaveNet: A Compact End-to-End Multi-Scale Residual CNN for Robust PPG Respiratory Rate Estimation. IEEE Internet of Things Journal."}
              url = {"https://ieeexplore.ieee.org/abstract/document/10098530/?casa_token=JPxrViFX_g8AAAAA:9rRdyCxIoqs-8XAPn2Zd7PZgv_0PJbfFDw7rv3yNvFIkn_XTRfFZ3sR_DK-DddLKT9wTZLorG05rnXc"}
              desc = {"Stuff"}
            />
            <PaperEntry
              dark = {dark}
              paperName = {"EEGWaveNet: Multiscale CNN-based spatiotemporal feature extraction for EEG seizure detection"}
              journal = {"IEEE Transactions on Industrial Informatics"}
              year = {"2021"}
              citation = {"Thuwajit, P., Rangpong, P., Sawangjai, P., Autthasan, P., Chaisaen, R., Banluesombatkul, N., ... & Wilaiprasitporn, T. (2021). EEGWaveNet: Multiscale CNN-based spatiotemporal feature extraction for EEG seizure detection. IEEE Transactions on Industrial Informatics, 18(8), 5547-5557."}
              url = {"https://ieeexplore.ieee.org/abstract/document/9645336/?casa_token=WRtcZRJspZ0AAAAA:ycWAPOhRnW5Ag1XTfPzhnY5vJKcZtL_Jpr6yuRVJEy21TTbuMXmm4U5gOJf-MfYq_kurPlb5PvkUcdM"}
              desc = {"Stuff"}
            />
            <PaperEntry
              dark = {dark}
              paperName = {"Explainable Deep Convolutional Neural Network in EEG Seizure Onset Prediction"}
              journal = {"IEICE Proceedings Series"}
              year = {"2020"}
              citation = {"THUWAJIT, P., BANLUESOMBATKUL, N., SAWANGJAI, P., LAKHAN, P., & WILAIPRASITPORN, T. (2020). Explainable Deep Convolutional Neural Network in EEG Seizure Onset Prediction. IEICE Proceedings Series, 63(SA1-6)."}
              url = {"https://www.ieice.org/publications/proceedings/summary.php?expandable=8&iconf=ICETC&session_num=SA1&number=SA1-6&year=2020"}
              desc = {"Stuff"}
            />
          </div>
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

export default Papers;