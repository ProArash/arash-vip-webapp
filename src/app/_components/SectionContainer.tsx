import React, { ReactNode } from 'react';
import { Separator } from '../../components/ui/separator';

const SectionContainer = ({
	id,
	title,
	children,
	lastItem,
	icon,
}: {
	id: string;
	title: string;
	children: ReactNode;
	lastItem?: boolean;
	icon: ReactNode;
}) => {
	return (
		<div id={id} className="flex flex-col gap-5">
			<div className="flex gap-2 items-center">
				<span>{icon}</span>
				<Separator orientation="vertical" />
				<h4>{title}</h4>
			</div>
			{children}
			{!lastItem && <Separator className="border-double" />}
		</div>
	);
};

export default SectionContainer;
