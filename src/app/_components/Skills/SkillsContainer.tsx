import {
	SiDocker,
	SiExpress,
	SiLinux,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiReactquery,
	SiTypescript,
} from 'react-icons/si';
import SectionContainer from '../SectionContainer';
import SkillCard, { SkillCardProps } from './SkillCard';
import SkillCardProgress from './SkillCardProgress';
import { Separator } from '../../../components/ui/separator';

const SkillsContainer = () => {
	const skillArray: SkillCardProps[] = [
		{
			icon: <SiNextdotjs />,
			title: 'Next.js',
			progress: 75,
		},
		{
			icon: <SiNestjs className='text-red-500' />,
			title: 'Nest.js',
			progress: 50,
		},
		{
			icon: <SiExpress />,
			title: 'Express.js',
			progress: 60,
		},
		{
			icon: <SiTypescript  className='text-blue-500' />,
			title: 'Typescript',
			progress: 60,
		},
		{
			icon: <SiReact  className='text-sky-500' />,
			title: 'React.js',
			progress: 65,
		},
		{
			icon: <SiReactquery  className='text-purple-700' />,
			title: 'React Query',
			progress: 60,
		},
		{
			icon: <SiNodedotjs  className='text-green-500' />,
			title: 'Node.js',
			progress: 65,
		},
		{
			icon: <SiDocker  className='text-blue-500' />,
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
		<SectionContainer id="skills" title="مهارت ها">
			{/* <div className="flex flex-wrap gap-5">
				{skillArray.map((v, i) => (
					<SkillCard key={i} props={v} />
				))}
			</div> */}
			<div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5">
				{skillArray.map((v, i) => (
					<SkillCardProgress key={i} props={v} />
				))}
			</div>
		</SectionContainer>
	);
};

export default SkillsContainer;
