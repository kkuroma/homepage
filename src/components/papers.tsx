import clsx from "clsx"
import Link from "next/link";

const Papers = ({ dark }: { dark: boolean }) => {
  return (
    <>
      <div className="w-[100%] container flex flex-col items-center justify-center gap-16 px-4 py-32 text-center">
        <h1 className={clsx("text-5xl font-extrabold tracking-tight) sm:text-[5rem]",dark?"text-white":"text-black")}>
          My <span className={dark?"text-blue-500":"text-rose-800"}>Research</span> Interests!
        </h1>
        <div className="md:w-[80%] sm:w-[100%] container flex flex-col items-center justify-center px-8 gap-8">

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] sm:text-[1.5rem]", dark ? "text-white" : "text-black")}>
              💡 Research Experiences
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2023-present) Computer Sciences Department, UW-Madison, USA</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li> 
                I joined the AI and computer vision lab under Prof. Yong Jae Lee after taking his course: CS639 deep learning in computer vision.
              </li>
              <li> 
                I'm currently working on improving the generative results of Stable Diffusion within a limited amount of fine tuning data.
              </li>
            </ul>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2022-present) Waisman Brain Imaging Center, UW-Madison, USA</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li> 
                I joined the lab through "informatics skunkworks", a UW-Madison program in matching students with a research team in machine learning. I'm currently working as an undergraduate RA here.
              </li>
              <li> 
                My current project is a low-rank MRI denoiser and T1 prediction pipeline from short-time (2 minutes) acquired MRI. This allows MRI acquisition time to be cut down by over 80%.
              </li>
            </ul>
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2021-2022) NXPO, Thailand</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
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
            <p className={clsx("md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <strong>(2020-present) Information Sciences and Technology, VISTEC, Thailand</strong>
            </p>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
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
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] sm:text-[1.5rem]", dark ? "text-white" : "text-black")}>
              📖 Publications
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li> 
              <Link className="font-bold" href={"https://ieeexplore.ieee.org/abstract/document/9645336/?casa_token=KhmW0IKEHtsAAAAA:AVgmSvh1VJ0mg3xJ3YhhBwSsTQ3GjTzPxV3JdAhcofpFGXsvVGxlmq47JuZ4fnA3bZOwSlm4WcEMqg"}>[Article] </Link> 
              <Link className="font-bold" href={"https://ieeexplore.ieee.org/abstract/document/9645336/?casa_token=KhmW0IKEHtsAAAAA:AVgmSvh1VJ0mg3xJ3YhhBwSsTQ3GjTzPxV3JdAhcofpFGXsvVGxlmq47JuZ4fnA3bZOwSlm4WcEMqg"}>[Cite] </Link> 
              RRWaveNet: A Compact End-to-End Multi-Scale Residual CNN for Robust PPG Respiratory Rate Estimation (2023, IEEE Internet of Things Journal)
              </li>
              <li>
              <Link className="font-bold" href={"https://ieeexplore.ieee.org/abstract/document/9645336/?casa_token=KhmW0IKEHtsAAAAA:AVgmSvh1VJ0mg3xJ3YhhBwSsTQ3GjTzPxV3JdAhcofpFGXsvVGxlmq47JuZ4fnA3bZOwSlm4WcEMqg"}>[Article] </Link> 
              <Link className="font-bold" href={"https://ieeexplore.ieee.org/abstract/document/9645336/?casa_token=KhmW0IKEHtsAAAAA:AVgmSvh1VJ0mg3xJ3YhhBwSsTQ3GjTzPxV3JdAhcofpFGXsvVGxlmq47JuZ4fnA3bZOwSlm4WcEMqg"}>[Cite] </Link> 
              EEGWaveNet: Multiscale CNN-based spatiotemporal feature extraction for EEG seizure detection (2021, IEEE Transactions on Industrial Informatics)
              </li>
              <li>
              <Link className="font-bold" href={"https://ieeexplore.ieee.org/abstract/document/9645336/?casa_token=KhmW0IKEHtsAAAAA:AVgmSvh1VJ0mg3xJ3YhhBwSsTQ3GjTzPxV3JdAhcofpFGXsvVGxlmq47JuZ4fnA3bZOwSlm4WcEMqg"}>[Article] </Link> 
              <Link className="font-bold" href={"https://ieeexplore.ieee.org/abstract/document/9645336/?casa_token=KhmW0IKEHtsAAAAA:AVgmSvh1VJ0mg3xJ3YhhBwSsTQ3GjTzPxV3JdAhcofpFGXsvVGxlmq47JuZ4fnA3bZOwSlm4WcEMqg"}>[Cite] </Link> 
              Explainable Deep Convolutional Neural Network in EEG Seizure Onset Prediction (2020, IEICE Proceedings Series)
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Papers;