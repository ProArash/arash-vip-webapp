import { Code, Handshake, PhoneCall, SquareMenu, UserRound } from 'lucide-react';
import SidebarMenu, { SidebarMenuProps } from './SidebarMenu';
import { AppRoutes } from '../../../lib/app.routes';

const MainSidebarItems = () => {
	const menuArray: SidebarMenuProps[] = [
		{
			title: 'درباره من',
			icon: <UserRound />,
			url: AppRoutes.about,
		},
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
		{
			title: 'ارتباط با من',
			icon: <PhoneCall />,
			url: AppRoutes.contact,
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
