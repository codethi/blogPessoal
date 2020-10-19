import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css', ]
})
export class HomeComponent implements OnInit {

  video = 'https://www.youtube.com/embed/KxC5QABYpug'

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)
  }





}
