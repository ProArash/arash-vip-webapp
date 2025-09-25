import Link from 'next/link';
import { ReactNode } from 'react';
import { Button } from '../../../components/ui/button';

export type ContactCardProps = {
	title: string;
	url: string;
	icon: ReactNode;
};
const ContactCard = ({ props }: { props: ContactCardProps }) => {
	return (
		<Button variant={'secondary'} asChild>
			<Link
				href={props.url}
				className="flex items-center gap-2"
				target="_blank">
				<span>{props.icon}</span>
				<span>{props.title}</span>
			</Link>
		</Button>
	);
};

export default ContactCard;
