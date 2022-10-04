import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // auth!: Auth;

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
