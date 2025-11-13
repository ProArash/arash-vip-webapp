import { Code, Handshake, PhoneCall, UserRound } from 'lucide-react';
import SidebarMenu, { SidebarMenuProps } from './SidebarMenu';
import { AppRoutes } from '../../../lib/app.routes';

const MainSidebarItems = () => {
	const menuArray: SidebarMenuProps[] = [
		{
			title: 'About me',
			icon: <UserRound />,
			url: AppRoutes.about,
		},
		{
			title: 'Skills',
			icon: <Code />,
			url: AppRoutes.skills,
		},
		{
			title: 'Request project',
			icon: <Handshake />,
			url: AppRoutes.inquiry,
		},
		// {
		// 	title: 'نمونه کارها',
		// 	icon: <SquareMenu />,
		// 	url: AppRoutes.projects,
		// },
		{
			title: 'Stay in touch',
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
