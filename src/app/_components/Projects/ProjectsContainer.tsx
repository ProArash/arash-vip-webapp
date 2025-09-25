import SectionContainer from '../SectionContainer';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import otolmeImg from '@/assets/otolme.png';
import kartiamImg from '@/assets/kartiam.png';
import radbarImg from '@/assets/radbar.png';
import arashImg from '@/assets/arashvip.png';
import { SquareMenu } from 'lucide-react';

const ProjectsContainer = () => {
	const projectArray: ProjectCardProps[] = [
		{
			title: 'اتول می',
			url: 'https://otolme.ir',
			image: otolmeImg,
		},
		{
			title: 'آرش وی آی پی',
			url: 'https://arash.vip',
			image: arashImg,
		},
		{
			title: 'کارتیام',
			url: 'https://kartiam.com/',
			image: kartiamImg,
		},
		{
			title: 'رادبار 24',
			url: 'https://radbar24.ir',
			image: radbarImg,
		},
	];
	return (
		<SectionContainer
			id="projects"
			title="نمونه کارها"
			icon={<SquareMenu />}>
			<div className="grid md:grid-cols-3 grid-cols-2 w-full justify-items-center gap-5">
				{projectArray.map((v, i) => (
					<ProjectCard key={i} props={v} />
				))}
			</div>
		</SectionContainer>
	);
};

export default ProjectsContainer;
