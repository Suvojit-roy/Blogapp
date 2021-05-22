import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/Userslice'

export default configureStore({
    reducer: {
        user: userReducer,
    },
})