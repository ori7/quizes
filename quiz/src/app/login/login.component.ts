import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string;
  user: UserModel;

  constructor(private loginService: LoginService,
    private router: Router) { 

    this.user = <UserModel>{};
  }

  ngOnInit() {
  }

  login(){

    this.loginService.login(this.user).subscribe(res => {
      console.log(res);
      if (res) {
        this.router.navigate(['/listQuiz']);
      } else {
        this.loginError = "Error with login"
      }
    });
  }
}
