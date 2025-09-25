import { Download } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';
import MainSidebarItems from './MainSidebarItems';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../../components/ui/avatar';
import LanguageSelectContainer from './LanguageSelectContainer';
import ThemeToggler from '../../../components/ThemeToggler';

const MainSidebar = () => {
	
	return (
		<div className="flex flex-col gap-3 h-full overflow-y-auto w-full md:border border-secondary md:rounded-2xl md:p-5 p-3">
			<div className="flex items-center gap-3 justify-between w-full">
				<div className="flex flex-col gap-2">
					<Avatar className="bg-secondary">
						<AvatarImage src={'me.svg'} />
						<AvatarFallback>AG</AvatarFallback>
					</Avatar>
				</div>
				<div>
					<Button icon={<Download />}>{'دانلود رزومه'}</Button>
				</div>
			</div>
			<Separator orientation="horizontal" />
			<MainSidebarItems />
			<div className="grow" />
			<ThemeToggler />
			<Separator />
			<LanguageSelectContainer />
		</div>
	);
};

export default MainSidebar;
