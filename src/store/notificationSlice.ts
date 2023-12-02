import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { notificationType } from '../types/notificationTypes';

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
    hideNotification: (state, action: PayloadAction<undefined>) => {
      state.isVisible = false;
    },
  },
});

export default notificationSlice.reducer;
export const { showNotification, hideNotification } = notificationSlice.actions;
