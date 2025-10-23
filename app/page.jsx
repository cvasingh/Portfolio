"use client";
import { nairobi, whiteabstract } from "@/assets";
import Home from "./_components/home";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./_components/about"), { ssr: false });
const Education = dynamic(() => import("./_components/education"), { ssr: false });
const Tech = dynamic(() => import("./_components/technologies"), { ssr: false });
const Projects = dynamic(() => import("./_components/projects"), { ssr: false });
const Experience = dynamic(() => import("./_components/experience"), { ssr: false });
const Contact = dynamic(() => import("./_components/contact"), { ssr: false });

export default function Page() {
  return (
    <>
      <Home />
      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>
      <div className="bg-experience bg-cover bg-center bg-no-repeat">
        <div
          className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat"
        >
          <Education />
        </div>
      </div>
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Tech />
      </div>
      <Projects />

      <div
        className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
      >
        <div
          className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
        >
          <Experience />
        </div>
      </div>

      <div className="relative z-0 bg-[#0f0f0f]">
        <Contact />
      </div>

      <style>{`

.bg-about{
  background: linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)
}
.bg-experience{
  background: linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%),url('${whiteabstract.src}')
}
.bg-experienceLight{
  background: linear-gradient(137deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.9) 60%)
}
.bg-tech{
  background: linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url(${nairobi.src})
}
`}</style>
    </>
  );
}
