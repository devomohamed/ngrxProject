import { counterReducer } from "./reducers/counter.reducer";
import { userReducer } from "./reducers/user.reducer";

export const myStore = {
  count:counterReducer,
  users: userReducer
}