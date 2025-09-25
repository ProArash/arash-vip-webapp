import {
	SiDocker,
	SiExpress,
	SiLinux,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiReactquery,
	SiRedux,
	SiTypescript,
} from 'react-icons/si';
import SectionContainer from '../SectionContainer';
import { SkillCardProps } from './SkillCard';
import SkillCardProgress from './SkillCardProgress';
import { Code } from 'lucide-react';

const SkillsContainer = () => {
	const skillArray: SkillCardProps[] = [
		{
			icon: <SiNextdotjs />,
			title: 'Next.js',
			progress: 75,
		},
		{
			icon: <SiNestjs className="text-red-500" />,
			title: 'Nest.js',
			progress: 50,
		},
		{
			icon: <SiExpress />,
			title: 'Express.js',
			progress: 60,
		},
		{
			icon: <SiTypescript className="text-blue-500" />,
			title: 'Typescript',
			progress: 60,
		},
		{
			icon: <SiReact className="text-sky-500" />,
			title: 'React.js',
			progress: 65,
		},
		{
			icon: <SiReactquery className="text-orange-500" />,
			title: 'React Query',
			progress: 60,
		},
		{
			icon: <SiRedux className="text-purple-500" />,
			title: 'Redux toolkit',
			progress: 50,
		},
		{
			icon: <SiNodedotjs className="text-green-500" />,
			title: 'Node.js',
			progress: 65,
		},
		{
			icon: <SiDocker className="text-blue-500" />,
			title: 'Docker',
			progress: 50,
		},
		{
			icon: <SiLinux />,
			title: 'Linux',
			progress: 70,
		},
	];
	return (
		<SectionContainer id="skills" title="مهارت ها" icon={<Code />}>
			<div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5">
				{skillArray.map((v, i) => (
					<SkillCardProgress key={i} props={v} />
				))}
			</div>
		</SectionContainer>
	);
};

export default SkillsContainer;
