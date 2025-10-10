// app/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer, { type AuthState } from './slices/AuthSlice'; // Explicitly import AuthState
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Explicitly define RootState
export interface RootState {
  auth: AuthState;
  _persist?: { version: number; rehydrated: boolean }; // Optional: for redux-persist
}

// Configuración de persistencia
const persistConfig = {
  key: '09102025-600',
  storage,
  whitelist: ['auth'],
};

// Combinar reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);