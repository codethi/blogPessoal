import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.scroll()
  }

  sair() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }

  scroll () {
    window.onscroll = () => {
      let navbar = document.querySelector('nav')

      if (window.pageYOffset == 0) {
        navbar.style.backgroundColor = 'transparent'
      } else {
        navbar.style.backgroundColor = 'white'
      }
    }
  }

}
