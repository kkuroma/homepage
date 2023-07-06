import clsx from "clsx"
import Head from "next/head"
import HomePage from "@/components/home";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function Home({dark, globalPageHandler} : {dark : boolean, globalPageHandler: Dispatch<SetStateAction<String>>}) {
  useEffect(
    ()=>{globalPageHandler("home")}
  )
  return (
    <>
      <Head>
        <title>🏠 KK | Home Page</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/" />
      </Head>
      <main className={clsx("flex min-h-screen flex-col items-center justify-center",dark ? 'bg-gradient-to-b from-black to-indigo-950' : 'bg-gradient-to-b from-gray-300 to-white')}>
        <HomePage dark={dark}/>
      </main>
    </>
  );
}
