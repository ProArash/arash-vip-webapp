import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../components/ui/avatar';

const AvatarContainer = () => {
	return (
		<Avatar className="bg-secondary/90 w-[150px] h-[150px]">
			<AvatarImage src={'me.svg'} />
			<AvatarFallback>AG</AvatarFallback>
		</Avatar>
	);
};

export default AvatarContainer;
