'use client'
import { ThemeProvider } from 'next-themes';
import { ComponentProps, useEffect, useState } from 'react';

const CustomThemeProvider = ({
	children,
	...props
}: ComponentProps<typeof ThemeProvider>) => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, [mounted]);
	if (!mounted) return null;
	return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
