import React from "react";
import { useSelector, useDispatch } from 'react-redux';

// type AppProps = { message: string }; /* could also use interface */
import {
    increment,
    incrementByAmount,
    incrementAsync,
    decrement,
    selectCount,
} from './counterSlice';

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    return (
        <div>
            <div>Counter App</div>
            <span>{count}</span>
            <div>
                <button onClick={() => dispatch(incrementAsync(2))}>
                    +2 Async
                </button>
                <button onClick={() => dispatch(incrementByAmount(2))}>
                    +2
                </button>
                <button onClick={() => dispatch(increment())}>
                    +
                </button>
                <button onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>

        </div>
    );
}


export default App;