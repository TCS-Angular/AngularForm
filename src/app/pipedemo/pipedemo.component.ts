import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css'],
})
export class PipedemoComponent implements OnInit {
  timeChange = new Observable<String>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  cars = ["Hyundai", "Mahindra", "Ford", "Mercedes", "Tata"]

  num1 : number = 76.123123123;
  num2: number = 0.676544345;

  myinfo = {
    name: "Nishant", phoneno: 556455678, address: { street: "10th strret", city: "Bangalore"}
  }

  myincome = 1000; // to display currency pipe
  presentDate = new Date();
  constructor() {}

  ngOnInit(): void {}
}
