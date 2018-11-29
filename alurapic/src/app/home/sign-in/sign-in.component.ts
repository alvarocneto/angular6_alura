import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../core/auth.service';

@Component({
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    return this.authService.authenticate(userName, password).subscribe(
      () => {
        this.router.navigate(['user', userName]);
      },
      (err) => {
        console.log(err);
        this.loginForm.reset();
        alert('Invalid username or password');
      }
    );
  }
}
