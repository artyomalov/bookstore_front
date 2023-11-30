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


//Because this functions is been used in plenty places of the code, it was saved as separate function to avoid code duplication
export const showStandartErrorNotification = () =>
  showNotification({
    isVisible: true,
    text: 'Internal server error. Please reload the page.',
    type: notificationType.Error,
  });



export default notificationSlice.reducer;
export const { showNotification, hideNotification } = notificationSlice.actions;