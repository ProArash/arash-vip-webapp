'use client';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../../../components/ui/sheet';
import { Button } from '../../../components/ui/button';
import { Menu, X } from 'lucide-react';
import MainSidebar from './MainSidebar';
import { Separator } from '../../../components/ui/separator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux/store';
import { openDrawer } from '../../../lib/redux/drawer';

const MobileSidebar = () => {
	const drawerSelector = useSelector((state: RootState) => state.drawer);
	const dispatch = useDispatch();
	return (
		<div className="md:hidden flex flex-col gap-3 justify-center bg-background z-10 p-3 fixed top-0 w-full">
			<Sheet
				open={drawerSelector.open}
				onOpenChange={(v) => dispatch(openDrawer(v))}>
				<SheetTrigger asChild>
					<Button size={'icon'} variant={'outline'} asChild>
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="hidden">
						<SheetTitle>{''}</SheetTitle>
						<SheetDescription>{''}</SheetDescription>
					</SheetHeader>
					<div className="flex w-full justify-start p-2">
						<SheetClose>
							<Button size={'icon'} variant={'outline'} asChild>
								<X />
							</Button>
						</SheetClose>
					</div>
					<MainSidebar />
				</SheetContent>
			</Sheet>
			<Separator />
		</div>
	);
};

export default MobileSidebar;
