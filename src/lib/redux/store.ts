import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageSlice from './language';
import storage from 'redux-persist/lib/storage';
import { PersistConfig, persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import drawerSlice from './drawer';

export const rootReducer = combineReducers({
	language: languageSlice,
	drawer: drawerSlice,
});

export const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
	key: 'arash',
	storage,
	whitelist: ['language'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
