"use client";
import { nairobi, whiteabstract } from "@/assets";
import Intro from "./_components/intro";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./_components/about"), { ssr: false });
const Education = dynamic(() => import("./_components/education"), { ssr: false });
const Tech = dynamic(() => import("./_components/technologies"), { ssr: false });
const Projects = dynamic(() => import("./_components/projects"), { ssr: false });
const Experience = dynamic(() => import("./_components/experience"), { ssr: false });

export default function Home() {
  return (
    <div className="">
      <Intro />
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

      <style>{`

.bg-about{
  linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)
}
.bg-experience{
  linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%),url(${whiteabstract.src})
}
.bg-experienceLight{
  linear-gradient(137deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.9) 60%)
}
.bg-tech{
  linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url(${nairobi.src})
}
`}</style>
    </div>
  );
}
