import { configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from './api/baseApi';
import authReducer from "./features/auth/authSlice";
import { resetMiddleware } from "../middlware/Index";
import persistStore from 'redux-persist/es/persistStore';


const persistConfig = {
    key: "auth",
    storage: storage, // Fix the typo here
};

// User Persist
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware, resetMiddleware),
})

export const persistor = persistStore(store);