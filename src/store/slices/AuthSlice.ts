// src/slices/AuthSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Estado inicial
export interface AuthState {
  token: string | null;
  account_id:string | null;
  company_id: number | null;
  email: string | null;
  last_name: string | null;
  second_last_name: string | null;
  name: string | null;
  parent_id: number | null;
  rol_id: number | null;
  user_id: number | null;
  expirationTime: number | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  account_id:'',
  company_id: null,
  email: null,
  last_name: null,
  second_last_name: null,
  name: null,
  parent_id: null,
  rol_id: null,
  user_id: null,
  expirationTime: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Acción asíncrona para login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post( `${import.meta.env.VITE_API_AUTH_VERCEL}/auth/login`, credentials);
      const {
        token,
        company_id,
        account_id,
        email,
        last_name,
        second_last_name,
        name,
        parent_id,
        rol_id,
        user_id,
      } = response.data.data;
      localStorage.setItem('token', token)
      const expirationTime = Date.now() + 3600 * 1000;
      return { token, account_id, company_id, email, last_name, second_last_name, name, parent_id, rol_id, user_id, expirationTime };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Error en el login');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.account_id= '';
      state.company_id = null;
      state.email = null;
      state.last_name = null;
      state.second_last_name = null;
      state.name = null;
      state.parent_id = null;
      state.rol_id = null;
      state.user_id = null;
      state.expirationTime = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    checkTokenExpiration: (state) => {
      if (state.expirationTime && Date.now() > state.expirationTime) {
        state.token = null;
        state.company_id = null;
        state.email = null;
        state.account_id= '';
        state.last_name = null;
        state.second_last_name = null;
        state.name = null;
        state.parent_id = null;
        state.rol_id = null;
        state.user_id = null;
        state.expirationTime = null;
        state.isAuthenticated = false;
      } else {
        state.isAuthenticated = !!state.token;
      }
    },
    updateAccountId: (state, action: PayloadAction<string>) => {
    state.account_id = action.payload;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (
          state,
          action: PayloadAction<{
            token: string;
            company_id: number | null;
            email: string | null;
            last_name: string | null;
            second_last_name: string | null;
            name: string | null;
            parent_id: number | null;
            rol_id: number | null;
            user_id: number | null;
            expirationTime: number;
            account_id: string;
          }>
        ) => {
          state.loading = false;
          state.token = action.payload.token;
          state.company_id = action.payload.company_id;
          state.email = action.payload.email;
          state.last_name = action.payload.last_name;
          state.second_last_name = action.payload.second_last_name;
          state.name = action.payload.name;
          state.parent_id = action.payload.parent_id;
          state.rol_id = action.payload.rol_id;
          state.user_id = action.payload.user_id;
          state.expirationTime = action.payload.expirationTime;
          state.isAuthenticated = true;
          state.account_id = action.payload.account_id;
        }
      )
 
  },
});

export const { logout, checkTokenExpiration, updateAccountId } = authSlice.actions;
export default authSlice.reducer;

// Selector para verificar autenticación
export const selectIsAuthenticated = (state: { auth: AuthState }) => {
  const { isAuthenticated, expirationTime } = state.auth;
  if (expirationTime !== null && Date.now() > expirationTime) {
    return false;
  }
  return isAuthenticated;
};
export const selectAuth = (state: { auth: AuthState }) => state.auth;