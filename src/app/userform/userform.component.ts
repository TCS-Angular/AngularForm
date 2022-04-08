import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  users=[]
  user = {
    firstname: '',
    lastname: '',
    gender: 'Male',
    age: 0,
  };
  save() {
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response:any) => {
      console.log(response);
      this.users.push(response);
    });
  }
  deleteRow(user, index){
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response : any) => {
      console.log(response);
      this.users.splice(index, 1);
    })

  }

  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
