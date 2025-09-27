'use client';
import { BsMailbox, BsPhone, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import SectionContainer from '../SectionContainer';
import ContactCard, { ContactCardProps } from './ContactCard';
import { Check, PhoneCall } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, AlertTitle } from '../../../components/ui/alert';

const ContactContainer = () => {
	const formSchema = z.object({
		name: z.string().min(3, 'حداقل 3 کاراکتر وارد کنید'),
		mobile: z.string().min(11, 'موبایل نامعتبر').max(13, 'موبایل نامعتبر'),
		description: z.string().min(5, 'حداقل 5 کاراکتر وارد کنید'),
	});
	type ContactRequestDto = z.infer<typeof formSchema>;
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
	} = useForm<ContactRequestDto>({
		defaultValues: undefined,
		resolver: zodResolver(formSchema),
		mode: 'all',
	});

	const handleContact = async (data: ContactRequestDto) => {
		const req = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(data),
		});
		if (req.status == 200) reset();
	};

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
			<div className="md:w-1/3 w-full flex flex-col gap-5">
				<form
					className="flex flex-col gap-3 rounded-2xl"
					onSubmit={handleSubmit(handleContact)}>
					<Label>{'نام کامل'}</Label>
					<Input
						placeholder="نام کامل خود را وارد کنید"
						type="text"
						{...register('name')}
						error={errors.name?.message}
					/>
					<Label>{'موبایل'}</Label>
					<Input
						placeholder="موبایل"
						type="tel"
						{...register('mobile')}
						error={errors.mobile?.message}
					/>
					<Label>{'توضیحات'}</Label>
					<Textarea
						placeholder="درخواست پروژه فروشگاهی، شرکتی، دانشجویی، همکاری و ...."
						{...register('description')}
						className={`min-h-[150px] max-h-[400px]`}
						error={errors.description?.message}
					/>
					<Button
						disabled={!isValid || isSubmitting}
						loading={isSubmitting}>
						<Check className="size-4" />
						{'ارسال'}
					</Button>
					{isSubmitSuccessful && (
						<Alert variant={'success'}>
							<Check />
							<AlertTitle>{'درخواست ثبت شد'}</AlertTitle>
						</Alert>
					)}
				</form>
				<div className="flex flex-wrap gap-3">
					{contactArray.map((v, i) => (
						<ContactCard key={i} props={v} />
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default ContactContainer;
