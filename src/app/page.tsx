import AboutContainer from './_components/About/AboutContainer';
import SkillsContainer from './_components/Skills/SkillsContainer';

const HomePage = () => {
	return (
		<div className="flex flex-col p-5 gap-5 w-full md:border border-secondary md:rounded-2xl h-full overflow-y-auto">
			<AboutContainer />
			<SkillsContainer />
		</div>
	);
};

export default HomePage;
