import * as React from 'react';

import { cn } from '@/lib/utils';
import { Alert, AlertTitle } from './alert';
import { Info } from 'lucide-react';

type TextareaProps = {
	error?: string;
};

function Textarea({
	className,
	...props
}: React.ComponentProps<'textarea'> & TextareaProps) {
	return (
		<div className="flex flex-col gap-2">
			{props.error && (
				<Alert variant={'destructive'}>
					<Info />
					<AlertTitle>{props.error}</AlertTitle>
				</Alert>
			)}
			<textarea
				data-slot="textarea"
				className={cn(
					`border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
						props.error &&
						'border-destructive focus-visible:ring-destructive'
					}`,
					className
				)}
				{...props}
			/>
		</div>
	);
}

export { Textarea };
