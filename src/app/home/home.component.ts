import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeDetails = "Practice, more more more more practice"
  inputText = "write here"
  counter = 0;

  clicker = (counter) => {
    this.counter++;
    return counter;

  }

  constructor() { }

  ngOnInit() {
    
  }

}
