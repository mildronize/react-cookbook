import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import studentService from './users.service';

import { Student } from './users.service';
import { AppThunk, AppDispatch } from '../../../app/store';

type StateType = {
    data: Student[]
};

const initialState: StateType = {
    data: []
};

// Pure actions

const reducers = {
    
    update: (state: any, { payload }: PayloadAction<Student[]>) => {
        state.data = payload;
    },
    add: (state: any, { payload }: PayloadAction<Student>) => {
        state.data.push(payload);
    },
    delete: (state: any, { payload }: PayloadAction<string>) => {
        state.data = state.data.filter( (item: Student) => (item.id != payload));
    },
    edit: (state: any, { payload }: PayloadAction<{
        id: string,
        data: Student
    }>) => {
        const id = payload.id;
        const data = payload.data;
        state.data = state.data.map((item : Student) => (item.id == id ? data : item));
    },
};

// Async actions

export const fetchAll = () => async (dispatch: AppDispatch) => {
    const { data } = await studentService.getAll();
    dispatch(actions.update(data));
};

export const addDatabase = ( value: Student): AppThunk =>  (dispatch: AppDispatch) => {
    return studentService.add(value);
};

export const deleteDatabase = ( id: string): AppThunk =>  (dispatch: AppDispatch) => {
    return studentService.delete(id);
};

export const fetch = ( id: string): AppThunk =>  (dispatch: AppDispatch) => {
    return studentService.get(id);
};


// Setup Slice
const slice = createSlice({
    name: 'users',
    initialState,
    reducers,
});

export const selector = (state: RootState) => state.users
export const actions =  slice.actions;
export default slice.reducer;