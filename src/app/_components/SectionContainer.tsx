import React, { ReactNode } from 'react';
import { Separator } from '../../components/ui/separator';

const SectionContainer = ({
	id,
	title,
	children,
}: {
	id: string;
	title: string;
	children: ReactNode;
}) => {
	return (
		<div id={id} className="flex flex-col gap-5">
			<h4>{title}</h4>
			{children}
			<Separator />
		</div>
	);
};

export default SectionContainer;
