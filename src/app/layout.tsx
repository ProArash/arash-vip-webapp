import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import AppProvider from '../components/AppProvider';
import MainSidebar from './_components/Sidebar/MainSidebar';

const vazirFont = localFont({
	src: '../assets/vazir-fd.woff2',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'AG',
	description: 'ssss',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl">
			<body className={`${vazirFont.className} antialiased`}>
				<AppProvider>
					<main className="flex justify-between md:gap-5 h-screen w-full md:p-5">
						<MainSidebar />
						{children}
					</main>
				</AppProvider>
			</body>
		</html>
	);
}
