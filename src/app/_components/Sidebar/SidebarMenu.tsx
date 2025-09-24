import { ReactNode } from 'react';
import { Label } from '../../../components/ui/label';
import { Separator } from '../../../components/ui/separator';

export type SidebarMenuProps = {
	title: string;
	icon?: ReactNode;
};

const SidebarMenu = ({ data }: { data: SidebarMenuProps }) => {
	return (
		<div className="flex items-center gap-2 h-full rounded-sm hover:bg-accent p-1 transition active:bg-accent/90">
			{data.icon}
			<Separator orientation="vertical" />
			<Label>{data.title}</Label>
		</div>
	);
};

export default SidebarMenu;
