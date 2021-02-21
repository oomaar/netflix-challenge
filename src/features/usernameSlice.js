import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
    name: 'userName',
    initialState: {
        value: '',
    },
    reducers: {
        setName: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { setName } = usernameSlice.actions;

export const selectUserName = state => state.userName.value;

export default usernameSlice.reducer;