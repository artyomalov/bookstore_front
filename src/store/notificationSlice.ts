import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';

enum notificationType {
  Sucsess = 'sucsess',
  Warn = 'warn',
  Error = 'error',
}

type InitialStateType = {
  isVisible: boolean;
  text: string;
  type: notificationType;
};

const initialState: InitialStateType = {
  isVisible: false,
  text: '',
  type: notificationType.Error,
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{
        isVisible: boolean;
        text: string;
        type: notificationType;
      }>
    ) => {
      state.isVisible = action.payload.isVisible;
      state.text = action.payload.text;
      state.type = action.payload.type;
    },
    hideNotification: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export default notificationSlice.reducer;
