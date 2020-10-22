import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';

type CounterType = { value: number };
const initialState: CounterType = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: any) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};


export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;