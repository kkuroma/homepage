import clsx from "clsx"

const Origami = ({ dark }: { dark: boolean }) => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-16 px-4 py-32 ">
        <h1 className={clsx("text-5xl font-extrabold tracking-tight) sm:text-[5rem]", dark ? "text-white" : "text-black")}>
          My <span className={dark ? "text-blue-500" : "text-rose-800"}>Origami</span> Creations!
        </h1>
      </div>
      <div className="md:w-[80%] sm:w-[100%] container flex flex-col items-center justify-center px-8 gap-8">

          <div className="w-[100%] container flex flex-col text-start justify-center gap-4">
            <h2 className={clsx("text-3xl font-bold tracking-tight) md:text-[2rem] sm:text-[1.5rem]", dark ? "text-white" : "text-black")}>
              📖 Publications
            </h2>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <ul className={clsx("list-inside list-disc md:text-[1.15rem] sm:text-[0.8rem]", dark ? "text-gray-300" : "text-black")}>
              <li>
              Osathitporn, P., Sawadwuthikul, G., Thuwajit, P., Ueafuea, K., Mateepithaktham, T., Kunaseth, N., ... & Wilaiprasitporn, T. (2023). RRWaveNet: A Compact End-to-End Multi-Scale Residual CNN for Robust PPG Respiratory Rate Estimation. <i>IEEE Internet of Things Journal</i>.
              </li>
              <li>
              Thuwajit, P., Rangpong, P., Sawangjai, P., Autthasan, P., Chaisaen, R., Banluesombatkul, N., ... & Wilaiprasitporn, T. (2021). EEGWaveNet: Multiscale CNN-based spatiotemporal feature extraction for EEG seizure detection. <i>IEEE Transactions on Industrial Informatics</i>, 18(8), 5547-5557.
              </li>
              <li>
              Thuwajit P., Banluesombatkul, N., Sawangjai, P., Lakhan, P., & Wilaiprasitporn, T. (2020). Explainable Deep Convolutional Neural Network in EEG Seizure Onset Prediction. <i>IEICE Proceedings Series</i>, 63(SA1-6).
              </li>
            </ul>
          </div>

      </div>
    </>
  )
}

export default Origami;