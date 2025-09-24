import ThemeToggler from '../../../components/ThemeToggler';
import AvatarContainer from '../AvatarContainer';

const MainSidebar = () => {
	return (
		<div className="md:flex flex-col gap-5 hidden h-full overflow-y-auto w-1/4 md:border border-secondary md:rounded-2xl p-5">
			<AvatarContainer />
			<div className="grow" />
			<ThemeToggler />
		</div>
	);
};

export default MainSidebar;
