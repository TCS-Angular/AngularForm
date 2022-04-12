import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  myincome = 1000; // to display currency pipe
  presentDate= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
