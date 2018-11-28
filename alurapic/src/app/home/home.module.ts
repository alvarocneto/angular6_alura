import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/componets/vmessage/vmessage.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
  declarations: [SignInComponent]
})
export class HomeModule {}
