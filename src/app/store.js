import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../features/appSlice.js'

export default configureStore({
    reducer: {
        app: appReducer,
    }
})