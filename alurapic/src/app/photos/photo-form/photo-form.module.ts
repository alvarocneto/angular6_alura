import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/componets/vmessage/vmessage.module';

import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule]
})
export class PhotoFormModule {}
