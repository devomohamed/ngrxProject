import { createSelector } from "@ngrx/store"
import { User } from "../../models/user.model"

export const usersSelector = createSelector(
  (state:{users:User[],count:number}) => state,
  data => data.users
)
