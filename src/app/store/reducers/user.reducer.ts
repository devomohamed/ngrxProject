import { createReducer, on } from '@ngrx/store';
import { add, remove } from '../actions/user.action';
import { User } from '../../models/user.model';

export const initialStateUser:User[] = [];

export const userReducer = createReducer(
  initialStateUser,
  on(add,(state,{user}) =>[...state, user]),
  on(remove, (state,{id}) => state.filter(user => user.id!== id)),
);