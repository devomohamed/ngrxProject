import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const add = createAction('[User Component] Add',props<{user:User}>());
export const remove = createAction('[User Component] Remove',props<{id:number}>());
