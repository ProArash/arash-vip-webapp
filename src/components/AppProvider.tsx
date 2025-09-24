'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';
import CustomThemeProvider from './CustomThemeProvider';

const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			<CustomThemeProvider
				attribute={'class'}
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange>
				{children}
			</CustomThemeProvider>
		</Provider>
	);
};

export default AppProvider;
