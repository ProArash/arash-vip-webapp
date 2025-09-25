import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import AppProvider from '../components/AppProvider';
import MainSidebar from './_components/Sidebar/MainSidebar';
import MobileSidebar from './_components/Sidebar/MobileSidebar';
import Script from 'next/script';

const vazirFont = localFont({
	src: '../assets/vazir-fd.woff2',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Arash Ghanbari | آرش قنبری',
	description:
		'طراحی و توسعه انواع وبسایت و وب اپلیکیشن با فریموورک های مدرن و بروز',
	keywords: [
		'Next.js developer',
		'NestJS backend',
		'TypeScript fullstack developer',
		'React frontend engineer',
		'Node.js expert',
		'طراحی سایت شخصی',
		'برنامه نویسی فول استک',
		'خدمات توسعه وب',
		'JavaScript developer portfolio',
		'Fullstack web development services',
		'Frontend و Backend',
		'وب اپلیکیشن مدرن',
		'Software engineer freelance',
		'Web developer Iran',
		'SEO friendly web design',
	],
	authors: [{ name: 'Arash Ghanbari', url: 'https://arash.vip' }],
	creator: 'Arash Ghanbari',
	publisher: 'Arash Ghanbari',
	metadataBase: new URL('https://arash.vip'),
	alternates: {
		canonical: 'https://arash.vip',
	},
	openGraph: {
		type: 'website',
		url: 'https://arash.vip',
		title: 'Arash Ghanbari | Fullstack Developer',
		description:
			'Fullstack developer specializing in Next.js, NestJS, and TypeScript. طراحی و توسعه وبسایت و اپلیکیشن‌های مدرن.',
		siteName: 'Arash Ghanbari Portfolio',
		images: [
			{
				url: 'https://arash.vip/me.svg',
				width: 600,
				height: 600,
				alt: 'Arash Ghanbari Portfolio Preview',
			},
		],
		locale: 'en_US',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-video-preview': -1,
		},
	},
	icons: {
		icon: [
			{
				url: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				url: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
		apple: [
			{
				url: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				url: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
		shortcut: '/favicon.ico',
	},
	category: 'technology',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl">
			<body className={`${vazirFont.className} antialiased`}>
				<div className="cf-turnstile" data-sitekey="0x4AAAAAAB3apweFI31PJxcr"></div>
				<AppProvider>
					<main className="flex md:flex-row flex-col justify-between md:gap-3 h-screen w-full md:p-5">
						<div className="md:flex hidden md:w-1/4 w-full">
							<MainSidebar />
						</div>
						<MobileSidebar />
						<div className="w-full mt-[60px] md:mt-0">
							{children}
						</div>
					</main>
				</AppProvider>
				<Script
					src="https://challenges.cloudflare.com/turnstile/v0/api.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
