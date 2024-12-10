import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/actions/counter.action';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from './models/user.model';
import { add, remove } from './store/actions/user.action';
import { FormsModule } from '@angular/forms';
import { usersSelector } from './store/selectors/user.selector';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrxProject';
  count$: Observable<number>
  users$!: Observable<User[]>

  userName!:string
  count:number = 0

  constructor(private store: Store<{ count: number,users:User[] }>) {
    this.count$ = store.select('count');
    // store.select('users').subscribe(users => {
    //   console.log(users,"users");
    //   this.users = users
      
    // })
    this.users$ = this.store.pipe(select(usersSelector))
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  addUser(){
    this.count = this.count + 1
    this.store.dispatch(add({user:{id: this.count,name: this.userName,age:22}}))
  }
  deleteUser(id:number){
    this.store.dispatch(remove({id}))
  }
}
