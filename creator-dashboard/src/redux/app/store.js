import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import { PostApi } from "../features/PostsApi";
import AuthTokenReducer from "../features/authTokenSlice";
import { QuestionsApi } from "../features/QuestionsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import modalsSlice from "../features/modalsSlice";
import otherSliceReducer from "../features/otherSlice";
import { AuthApi } from "../features/AuthApi";
import { UserApi } from "../features/UserApi";

export const store = configureStore({
  reducer: {
    others: otherSliceReducer,
    modalsState: modalsSlice,
    counter: counterReducer,
    authToken: AuthTokenReducer,
    [PostApi.reducerPath]: PostApi.reducer,
    [QuestionsApi.reducerPath]: QuestionsApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      PostApi.middleware,
      QuestionsApi.middleware,
      AuthApi.middleware,
      UserApi.middleware,
    ),
});
setupListeners(store.dispatch);
