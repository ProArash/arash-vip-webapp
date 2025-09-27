import Image, { StaticImageData } from 'next/image';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export type ProjectCardProps = {
	url: string;
	title: string;
	image: string | StaticImageData;
};

const ProjectCard = ({ props }: { props: ProjectCardProps }) => {
	return (
		<div className="flex flex-col gap-3 shadow dark:shadow-accent rounded-[8px] p-5">
			<Image
				src={props.image}
				alt={props.title}
				width={0}
				height={0}
				className="object-cover w-[250px] h-[250px] rounded-xl"
			/>
			<Link href={props.url} target="_blank">
				<Button className="w-full" variant={'default'}>
					<ArrowUpRight className='size-4'/>
					{props.title}
				</Button>
			</Link>
		</div>
	);
};

export default ProjectCard;
