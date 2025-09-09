// app/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import authReducer from '../store/slices/AuthSlice'; // Agrega esto
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

// Configuración de persistencia
const persistConfig = {
  key: '09092025-500',
  storage,
  whitelist: [/* 'counter', */ 'auth'], // Agrega 'auth' para persistir
};

// Combinar reducers
const rootReducer = combineReducers({
  /* counter: counterReducer, */
  auth: authReducer, // Agrega esto
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

// Tipos actualizados
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);