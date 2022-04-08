import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  subjects: any[] = [];
  isOpen = false;
  users = [];
  user = {
    firstname: '',
    lastname: '',
    gender: 'Male',
    age: 0,
    dob: '',
    subject: '',
  };
  save() {
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response: any) => {
      console.log(response);
      this.users.push(response);
      this.isOpen = true;
    });
  }
  deleteRow(user, index) {
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response: any) => {
      console.log(response);
      this.users.splice(index, 1);
    });
  }

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    console.log('init');
    const observable = this.userService.getSubjects();
    observable.subscribe((response: any) => {
      console.log(response);
      this.subjects = response;
    });
  }
}
