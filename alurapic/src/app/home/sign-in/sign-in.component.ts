import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Login');
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
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
        alert('Invalid username or password');
      }
    );
  }
}
