import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  role: string;
  streak: number;
  xp: number;
  level: number;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  name: 'Arjun Kumar',
  role: 'Junior Explorer',
  streak: 12,
  xp: 1250,
  level: 5,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
      state.isAuthenticated = true;
    },
    addXp: (state, action: PayloadAction<number>) => {
      state.xp += action.payload;
    },
  },
});

export const { login, addXp } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
