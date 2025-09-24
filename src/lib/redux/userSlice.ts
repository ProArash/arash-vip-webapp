import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	name: string;
}

const initialState: UserState = {
	name: '',
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		updateName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		clearName: () => {
			return initialState;
		},
	},
});

export const { updateName, clearName } = userSlice.actions;

export default userSlice.reducer;
