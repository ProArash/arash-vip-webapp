import React from 'react';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../components/ui/avatar';
import { Label } from '../../components/ui/label';
import { Separator } from '../../components/ui/separator';
import MainSidebarItems from './Sidebar/MainSidebarItems';

const AvatarContainer = () => {
	return (
		<div className="flex flex-col items-center gap-3 w-full">
			<Avatar className="bg-secondary/90 w-[50px] h-[50px]">
				<AvatarImage src={'me.svg'} />
				<AvatarFallback>AG</AvatarFallback>
			</Avatar>
			<Label>{'تست تست'}</Label>
			<h6>{'تستتستس'}</h6>
			<Separator orientation="horizontal" />
			<MainSidebarItems />
		</div>
	);
};

export default AvatarContainer;
