'use client';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../../../components/ui/label';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../../../components/ui/select';
import Flag from 'react-world-flags';
import { RootState } from '../../../lib/redux/store';
import { updateLanguage } from '../../../lib/redux/language';

const LanguageSelectContainer = () => {
	const langSlice = useSelector((state: RootState) => state.language);
	const dispatch = useDispatch();
	return (
		<div className="flex items-center gap-5">
			<Label>{'زبان'}</Label>
			<Select
				value={langSlice.language}
				onValueChange={(v) => dispatch(updateLanguage(v))}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder={'زبان را انتخاب کنید'} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>
							<Label>{'Languages'}</Label>
						</SelectLabel>
						<SelectItem value="persian">
							<Flag code="IR" width={30} />
						</SelectItem>
						<SelectItem value="english">
							<Flag code="US" width={30} />
						</SelectItem>
						<SelectItem value="deutsch">
							<Flag code="DE" width={30} />
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default LanguageSelectContainer;
