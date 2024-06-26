import Contact from "@/components/Contact";

import Intro from "@/components/Intro";
import Project from "@/components/Project";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <Intro />
      <div className="h-[2px] bg-gradient-to-r from-[#e310cb] to-[#86fbfb]  w-screen "></div>
      <About />
      <div className="h-[2px] bg-gradient-to-r from-[#e310cb] to-[#86fbfb]  w-screen "></div>
      <Skills />
      <div className="h-[2px] bg-gradient-to-r from-[#e310cb] to-[#86fbfb]  w-screen "></div>
      <Contact />
     
    </main>
  );
}
