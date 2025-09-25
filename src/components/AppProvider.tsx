'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../lib/redux/store';
import CustomThemeProvider from './CustomThemeProvider';
import { PersistGate } from 'redux-persist/integration/react';

const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<CustomThemeProvider
					attribute={'class'}
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					{children}
				</CustomThemeProvider>
			</PersistGate>
		</Provider>
	);
};

export default AppProvider;
