import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirdemo',
  templateUrl: './dirdemo.component.html',
  styleUrls: ['./dirdemo.component.css']
})
export class DirdemoComponent implements OnInit {
  courses = ["Maths courses", "English Course"];
  getVal(item: any){
    console.log(item);
    

  }





  viewMode = 'map';
  constructor() { }
  ngOnInit(): void {
  }
}
