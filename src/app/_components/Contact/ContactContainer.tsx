import { BsMailbox, BsPhone, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import SectionContainer from '../SectionContainer';
import ContactCard, { ContactCardProps } from './ContactCard';
import { PhoneCall } from 'lucide-react';

const ContactContainer = () => {
	const contactArray: ContactCardProps[] = [
		{
			title: 'ایمیل',
			icon: <BsMailbox className="text-yellow-500 size-4" />,
			url: 'mailto:ghanbariarash1999@gmail.com',
		},
		{
			title: 'تلگرام',
			icon: <BsTelegram className="text-blue-500 size-4" />,
			url: 'https://t.me/ProArash',
		},
		{
			title: 'واتس اپ',
			icon: <BsWhatsapp className="text-green-500 size-4" />,
			url: 'https://t.me/ProArash',
		},
		{
			title: 'موبایل',
			icon: <BsPhone className="size-4" />,
			url: 'tel:+989392414124',
		},
	];
	return (
		<SectionContainer
			title="ارتباط با من"
			id="contact"
			lastItem
			icon={<PhoneCall className="size-4" />}>
			<div className="flex flex-col w-fit gap-3">
				{contactArray.map((v, i) => (
					<ContactCard key={i} props={v} />
				))}
			</div>
		</SectionContainer>
	);
};

export default ContactContainer;
