'use client';
import { useTheme } from 'next-themes';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

const ThemeToggler = () => {
	const { setTheme, resolvedTheme } = useTheme();
	return (
		<div className="flex gap-3 items-center w-full">
			<Label>{'حالت شب'}</Label>
			<Switch
				dir="ltr"
				checked={resolvedTheme == 'dark'}
				onCheckedChange={(c) => setTheme(c ? 'dark' : 'light')}
			/>
		</div>
	);
};

export default ThemeToggler;
