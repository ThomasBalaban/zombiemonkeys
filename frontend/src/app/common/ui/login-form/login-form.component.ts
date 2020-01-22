import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
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
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.zmat = this.cookieService.get('zmat');
  }

  saveForm() {
    this.userService.makeAccount(this.createUserForm.value).subscribe( (res: any) => {
    }, error => console.log(error));
  }

  loginForm() {
    this.userService.loginUser(this.loginUserForm.value).subscribe( (res: TokenObj) => {
      console.log(res);
      this.cookieService.set('zmat', res.token);
      this.router.navigate(['/']);
    }, error => console.log(error));
  }
}
