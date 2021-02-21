import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice";
import usernameReducer from "../features/usernameSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    userName: usernameReducer,
  },
});
