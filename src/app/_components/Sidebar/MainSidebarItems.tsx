import { Code, Handshake, SquareMenu } from 'lucide-react';
import SidebarMenu, { SidebarMenuProps } from './SidebarMenu';
import { AppRoutes } from '../../../lib/app.routes';

const MainSidebarItems = () => {
	const menuArray: SidebarMenuProps[] = [
		{
			title: 'مهارت ها',
			icon: <Code />,
			url: AppRoutes.skills,
		},
		{
			title: 'درخواست پروژه',
			icon: <Handshake />,
			url: AppRoutes.inquiry,
		},
		{
			title: 'نمونه کارها',
			icon: <SquareMenu />,
			url: AppRoutes.projects,
		},
	];
	return (
		<div className="flex flex-col gap-3 w-full h-full overflow-y-auto">
			{menuArray.map((v, i) => (
				<SidebarMenu data={v} key={i} />
			))}
		</div>
	);
};

export default MainSidebarItems;
