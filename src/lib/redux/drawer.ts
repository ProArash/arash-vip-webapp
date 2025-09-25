import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerStateProps {
	open: boolean;
}

const initialState: DrawerStateProps = {
	open: false,
};

export const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		openDrawer: (state, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},
	},
});

export const { openDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
