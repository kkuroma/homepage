import clsx from "clsx"
import Image from 'next/image'
import Link from "next/link";

const HomePage = ({ dark }: { dark: boolean }) => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-32 text-center">
        <h1 className={clsx("md:text-6xl text-4xl font-extrabold tracking-tight) text-[5rem]", dark ? "text-white" : "text-black")}>
          Hey guys! I am <span className={dark ? "text-blue-500" : "text-rose-800"}>KK</span>
        </h1>
        <h2 className={clsx("md:text-[2rem] text-[1.25rem] font-bold tracking-tight)", dark ? "text-white" : "text-black")}>
          <span className={dark ? "text-blue-500" : "text-rose-800"}>Deep Learning</span> Researcher /
          <span className={dark ? "text-blue-500" : "text-rose-800"}> Math</span>ematician /
          <span className={dark ? "text-blue-500" : "text-rose-800"}> Origami</span> Artist
        </h2>
        <Image
          src={require("@/images/profile.png")}
          width={300}
          height={300}
          alt="KK's actual face"
          className={clsx("rounded-2xl shadow-xl border-8", dark ? "border-white" : "border-black")}
        />
        <div className="md:w-[80%] w-[100%] container flex flex-col items-center justify-center px-8 gap-1">
          <h1 className={clsx("text-3xl font-bold tracking-tight) text-[2rem]", dark ? "text-white" : "text-black")}>
            Welcome to my website!
          </h1>
          <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
          <p className={clsx("text-l tracking-tight) text-[1rem]", dark ? "text-white" : "text-black")}>
            Last Updated: August 2023
          </p>
        </div>
        <div className="container flex flex-row items-center justify-center gap-8">
            <Link
              className={clsx("w-32 aspect-square flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="mailto:thuwajit@wisc.edu"
              target="_blank"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 75.294 75.294"
                className={clsx("rounded-4xl w-[100%] h-[100%]", dark ? "fill-white" : "fill-black")}
              >
                <path d="M66.097 12.089h-56.9C4.126 12.089 0 16.215 0 21.286v32.722c0 5.071 4.126 9.197 9.197 9.197h56.9c5.071 0 9.197-4.126 9.197-9.197V21.287c.001-5.072-4.125-9.198-9.197-9.198zm-4.494 6L37.647 33.523 13.691 18.089h47.912zm4.494 39.117h-56.9A3.201 3.201 0 0 1 6 54.009V21.457l29.796 19.16c.04.025.083.042.124.065.043.024.087.047.131.069.231.119.469.215.712.278.025.007.05.01.075.016.267.063.537.102.807.102h.006c.27 0 .54-.038.807-.102.025-.006.05-.009.075-.016.243-.063.48-.159.712-.278a3.27 3.27 0 0 0 .131-.069c.041-.023.084-.04.124-.065l29.796-19.16v32.551a3.204 3.204 0 0 1-3.199 3.198z" />
              </svg>
            </Link>

            <Link
              className={clsx("w-32 aspect-square flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="https://github.com/konkuad"
              target="_blank"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={clsx("rounded-4xl w-[100%] h-[100%]", dark ? "fill-white" : "fill-black")}
              >
                <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" />
              </svg>
            </Link>

            <Link
              className={clsx("w-32 aspect-square flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="https://www.linkedin.com/in/punnawish-thuwajit-4b145a268/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6CxxyazkQvGDi9oRQqAk1g%3D%3D"
              target="_blank"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 260.366 260.366"
                className={clsx("rounded-4xl w-[100%] h-[100%]", dark ? "fill-white" : "fill-black")}
              >
                <path d="M34.703.183C15.582.183.014 15.748 0 34.884 0 54.02 15.568 69.588 34.703 69.588c19.128 0 34.688-15.568 34.688-34.704C69.391 15.75 53.83.183 34.703.183zM60.748 83.531H8.654a4.488 4.488 0 0 0-4.488 4.489v167.675a4.488 4.488 0 0 0 4.488 4.488h52.093a4.49 4.49 0 0 0 4.489-4.488V88.02a4.486 4.486 0 0 0-4.488-4.489zM193.924 81.557c-19.064 0-35.817 5.805-46.04 15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424a4.489 4.489 0 0 0-4.489 4.489v167.675a4.488 4.488 0 0 0 4.489 4.488h52.044a4.49 4.49 0 0 0 4.489-4.488v-82.957c0-23.802 4.378-38.555 26.227-38.555 21.526.026 23.137 15.846 23.137 39.977v81.535a4.489 4.489 0 0 0 4.49 4.488h52.068a4.489 4.489 0 0 0 4.488-4.488v-91.977c-.001-38.253-7.553-82.161-66.443-82.161z" />
              </svg>
            </Link>

            <Link
              className={clsx("w-32 aspect-square flex max-w-xs flex-col gap-1 rounded-xl text-l", dark?"bg-white/10 p-4 text-white hover:bg-white/20":"bg-black/20 p-4 text-black hover:bg-black/30")}
              href="/resume.pdf"
              target="_blank"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 511.999 511.999"
                className={clsx("rounded-4xl w-[100%] h-[100%]", dark ? "fill-white" : "fill-black")}
              >
                <path d="M478.859 111.609H340.506V77.877c0-9.152-7.419-16.57-16.57-16.57H188.065c-9.152 0-16.57 7.419-16.57 16.57v33.731H33.141C14.867 111.609 0 126.476 0 144.75v65.016c0 11.835 6.34 22.775 16.57 28.686v195.67c0 9.152 7.419 16.57 16.57 16.57h445.719c9.152 0 16.57-7.419 16.57-16.57V238.45c10.23-5.909 16.57-16.849 16.57-28.686v-65.016c.001-18.272-14.866-33.139-33.14-33.139zM204.636 94.447h102.729v17.161H204.636V94.447zM462.289 417.55H49.711V256.974l153.628 85.78 6.267 3.499v13.305c0 9.152 7.419 16.57 16.57 16.57H285.827c9.152 0 16.57-7.419 16.57-16.57v-13.304l159.893-89.28V417.55zm-219.544-74.561v-36.983h26.509v36.983h-26.509zm236.114-133.224c-8.041 4.49-168.977 94.353-176.464 98.532v-9.027c0-14.56-11.845-26.405-26.405-26.405h-39.98c-14.56 0-26.405 11.845-26.405 26.405v9.026L33.141 209.764V144.75h445.718v65.015z" />
              </svg>
            </Link>
        </div>
        <div className={clsx("gap-4 font-bold",dark ? 'text-white' : 'text-black')}>
          <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
          <p>© 2023 | KK (Punnawish Thuwajit)</p>
          <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
        </div>
      </div>
    </>
  )
}

export default HomePage;