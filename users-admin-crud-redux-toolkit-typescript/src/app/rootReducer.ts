import { combineReducers } from '@reduxjs/toolkit'

import UsersReducer from '../features/admin/users/users.slice';

const rootReducer = combineReducers({
    users: UsersReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;