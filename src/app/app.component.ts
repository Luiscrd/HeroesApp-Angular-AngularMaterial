import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



   get auth(){

    return this.authService.auth;

  }

  constructor(
    private router: Router,
    private authService: AuthService,

    ){}



  ngOnInit(): void {
  }

  logout(){

    this.authService.logout()

  }

  login(){

    this.router.navigate(['./auth/login'])

  }

}
