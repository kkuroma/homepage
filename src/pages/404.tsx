import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import Head from "next/head"

const errorPage = ({ dark, globalPageHandler }: { dark: boolean, globalPageHandler: Dispatch<SetStateAction<String>> }) => {
  globalPageHandler("error");
  return (
    <>
      <Head>
        <title>⚠️ 404 Not Found</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,200&display=swap" rel="stylesheet"></link>
      </Head> 
      <main className={clsx("flex min-h-screen flex-col items-center justify-center", dark ? 'bg-gradient-to-b from-black to-indigo-950' : 'bg-gradient-to-b from-gray-300 to-white')}>
        <div className="w-[100%] container flex flex-col items-center justify-center gap-16 px-4 py-32 text-center">
          <h1 className={clsx("text-5xl font-extrabold tracking-tight) sm:text-[5rem]", dark ? "text-white" : "text-black")}>
            <span className={dark ? "text-blue-400" : "text-rose-800"}>404</span> Page Not Found!
          </h1>
          <div className="md:w-[60%] sm:w-[80%] container flex flex-col items-center justify-center px-8 gap-1">
            <h1 className={clsx("text-3xl font-bold tracking-tight) sm:text-[2rem]", dark ? "text-white" : "text-black")}>
              Sorry for the inconvenience!
            </h1>
            <hr className={clsx("w-[100%] border-1",dark?"border-white":"border-black")}></hr>
            <p className={clsx("text-l tracking-tight) sm:text-[1rem]", dark ? "text-white" : "text-black")}>
              This page is either not created or under construction
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default errorPage