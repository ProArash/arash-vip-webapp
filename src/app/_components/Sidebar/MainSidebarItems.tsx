import { Code, Handshake, Home, SquareMenu } from 'lucide-react';
import SidebarMenu, { SidebarMenuProps } from './SidebarMenu';

const MainSidebarItems = () => {
	const menuArray: SidebarMenuProps[] = [
		{
			title: 'خانه',
			icon: <Home />,
		},
		{
			title: 'مهارت ها',
			icon: <Code />,
		},
		{
			title: 'درخواست پروژه',
			icon: <Handshake />,
		},
		{
			title: 'نمونه کارها',
			icon: <SquareMenu />,
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
