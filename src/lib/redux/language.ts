import { createSlice, PayloadAction, WritableDraft } from '@reduxjs/toolkit';

interface LanguageState {
	language: string;
}

const initialState: LanguageState = {
	language: 'persian',
};

export const languageSlice = createSlice({
	name: 'languageSlice',
	initialState,
	reducers: {
		updateLanguage: (
			state: WritableDraft<LanguageState>,
			action: PayloadAction<string>
		) => {
			state.language = action.payload;
		},
	},
});

export const { updateLanguage } = languageSlice.actions;
export default languageSlice.reducer;
