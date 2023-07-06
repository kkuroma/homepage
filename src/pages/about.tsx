import clsx from "clsx"
import Head from "next/head"
import Intro from "@/components/intro";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function Home({dark, globalPageHandler} : {dark : boolean, globalPageHandler: Dispatch<SetStateAction<String>>}) {
  useEffect(
    ()=>{globalPageHandler("about")}
  )
  return (
    <>
      <Head>
        <title>🤗 KK | About Me</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/" />
      </Head>
      <main className={clsx("flex min-h-screen flex-col items-center justify-center",dark ? 'bg-gradient-to-b from-black to-indigo-950' : 'bg-gradient-to-b from-gray-300 to-white')}>
        <Intro dark={dark}/>
      </main>
    </>
  );
}
