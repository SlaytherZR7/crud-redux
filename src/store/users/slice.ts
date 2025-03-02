import { createSlice } from '@reduxjs/toolkit';

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: string;
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
  reducers: {},
});

export default usersSlice.reducer;
