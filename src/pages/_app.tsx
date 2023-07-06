import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";


const MyApp: AppType = ({ Component, pageProps }) => {
  // global dark mode variable, passed throughout all pages
  const [globalDark, setGlobalDark] = useState<boolean>(false)
  const [globalPage, setGlobalPage] = useState<String>("")
  useEffect(() => {
    setGlobalDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    setGlobalPage("home")
  }, [])
  console.log(globalPage)
  return <>
    <Navbar 
    globalDark = {globalDark} 
    globalDarkHandler={setGlobalDark} 
    globalPage = {globalPage}
    />
    <Component {...pageProps} dark={globalDark} globalPageHandler={setGlobalPage}/>
  </>;
};



export default MyApp;