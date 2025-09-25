import { Download } from 'lucide-react';
import ThemeToggler from '../../../components/ThemeToggler';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';
import MainSidebarItems from './MainSidebarItems';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../../components/ui/avatar';

const MainSidebar = () => {
	return (
		<div className="md:flex flex-col gap-5 hidden h-full overflow-y-auto w-1/4 md:border border-secondary md:rounded-2xl p-5">
			<div className="flex items-center gap-3 justify-between w-full">
				<div>
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
			<Separator />
			<ThemeToggler />
		</div>
	);
};

export default MainSidebar;
