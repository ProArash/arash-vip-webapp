import { Label } from '../../../components/ui/label';
import { Progress } from '../../../components/ui/progress';
import { SkillCardProps } from './SkillCard';

const SkillCardProgress = ({ props }: { props: SkillCardProps }) => {
	return (
		<div className="flex gap-3 items-center justify-between">
			<div className="flex gap-2 items-center md:w-1/2 w-full">
				<Progress value={props.progress} className="w-full" />
			</div>
			<div className="flex items-center gap-2">
				<Label>{props.title}</Label>
				<span className="text-[22px]">{props.icon}</span>
			</div>
		</div>
	);
};

export default SkillCardProgress;
