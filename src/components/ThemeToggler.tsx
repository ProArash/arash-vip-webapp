'use client';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';
import { Moon, Sun } from 'lucide-react';
import { Label } from './ui/label';

const ThemeToggler = () => {
	const { setTheme, resolvedTheme } = useTheme();
	return (
		<div className="flex w-full justify-between gap-3">
			<Label>{'Night mode'}</Label>
			<Switch
				dir="ltr"
				checkedIcon={<Moon className="text-gray-900" />}
				unCheckedIcon={<Sun className="text-yellow-900" />}
				checked={resolvedTheme == 'dark'}
				onCheckedChange={(c) => setTheme(c ? 'dark' : 'light')}
			/>
		</div>
	);
};

export default ThemeToggler;
