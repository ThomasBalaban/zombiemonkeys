import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginSubScription;
  zmat: string;

  createUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  loginUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.zmat = this.cookieService.get('zmat');

    console.log('token: ', this.zmat);

    if (this.zmat) {
      console.log('logged in');
    }
  }

  saveForm() {
    console.log('created user: ', this.createUserForm.value);
    this.loginService.makeAccount(this.createUserForm.value).subscribe( (res: any) => {
      console.log(res);
    }, error => console.log(error));
  }

  loginForm() {
    console.log('login user: ', this.loginUserForm.value);
    this.loginService.loginUser(this.loginUserForm.value).subscribe( (res: TokenObj) => {
      console.log(res);
      this.cookieService.set('zmat', res.token);
      this.router.navigate(['/']);
    }, error => console.log(error));
  }
}
