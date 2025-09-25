'use client';
import { ReactNode } from 'react';
import { Separator } from '../../../components/ui/separator';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openDrawer } from '../../../lib/redux/drawer';

export type SidebarMenuProps = {
	title: string;
	url: string;
	icon?: ReactNode;
};

const SidebarMenu = ({ data }: { data: SidebarMenuProps }) => {
	const dispatch = useDispatch();
	return (
		<Link
			href={data.url}
			className="flex items-center gap-2 rounded-sm hover:bg-card p-1 transition active:bg-accent/90 w-full"
			onClick={() => dispatch(openDrawer(false))}>
			{data.icon}
			<Separator orientation="vertical" />
			<span>{data.title}</span>
		</Link>
	);
};

export default SidebarMenu;
