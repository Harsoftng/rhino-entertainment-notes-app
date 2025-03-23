import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import notesSlice from "@/store/slices/notes/notesSlice";

const appReducer = combineReducers({
  //app wide state goes in here
  notes: notesSlice.reducer,
});

const persistConfig = {
  key: "app_root",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export default function storeFactory() {
  return {
    store,
    persistor,
  };
}

// infer the App State and Dispatch from the store itself
export type RootAppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AppThunkType<ReturnType = void> = ThunkAction<
  void,
  RootAppState,
  unknown,
  Action
>;
