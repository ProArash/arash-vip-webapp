import {
  SiDocker,
  SiExpress,
  SiGo,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { IoMdCube } from "react-icons/io";
import SectionContainer from "../SectionContainer";
import SkillCard, { SkillCardProps } from "./SkillCard";
import { Code } from "lucide-react";

const SkillsContainer = () => {
  const skillArray: SkillCardProps[] = [
    {
      icon: <SiGo className="text-blue-500" />,
      title: "Golang",
      progress: 30,
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js",
      progress: 75,
    },
    {
      icon: <SiNestjs className="text-red-500" />,
      title: "Nest.js",
      progress: 50,
    },
    {
      icon: <SiNodedotjs className="text-green-500" />,
      title: "Node.js",
      progress: 65,
    },
    {
      icon: <SiExpress />,
      title: "Express.js",
      progress: 60,
    },
    {
      icon: <SiTypescript className="text-blue-500" />,
      title: "Typescript",
      progress: 60,
    },
    {
      icon: <SiReact className="text-sky-500" />,
      title: "React.js",
      progress: 65,
    },
    {
      icon: <SiReactquery className="text-orange-500" />,
      title: "React Query",
      progress: 60,
    },
    {
      icon: <SiRedux className="text-purple-500" />,
      title: "Redux toolkit",
      progress: 50,
    },
    {
      icon: <IoMdCube className="text-indigo-500" />,
      title: "Zustand",
      progress: 50,
    },

    {
      icon: <SiDocker className="text-blue-500" />,
      title: "Docker",
      progress: 50,
    },
    {
      icon: <SiLinux />,
      title: "Linux",
      progress: 70,
    },
  ];
  return (
    <SectionContainer id="skills" title="Skills" icon={<Code />}>
      <div className="flex flex-wrap w-full md:gap-5 gap-3">
        {skillArray.map((v, i) => (
          <SkillCard key={i} props={v} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillsContainer;
