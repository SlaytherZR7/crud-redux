import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    github: 'johndoe',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@example.com',
    github: 'johndoe',
  },
  {
    id: '3',
    name: 'John Doe',
    email: 'john.doe@example.com',
    github: 'johndoe',
  },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
