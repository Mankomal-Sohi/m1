import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <Intro />
      <div className="h-[3px] bg-gradient-to-r from-[#e310cb] to-[#86fbfb]  w-screen "></div>
      <About />
      <div className="h-[3px] bg-gradient-to-r from-[#e310cb] to-[#86fbfb]  w-screen "></div>

      <Contact />
     
    </main>
  );
}
