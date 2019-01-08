import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VMessageModule } from '../shared/componets/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/signup.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, RouterModule],
  declarations: [SignInComponent, SignUpComponent, HomeComponent]
})
export class HomeModule {}
