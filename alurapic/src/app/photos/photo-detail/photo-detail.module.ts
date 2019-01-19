import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoModule } from '../photo/photo.module';
import { PhotoDetailComponent } from './photo-detail.component ';

@NgModule({
  declarations: [PhotoDetailComponent],
  imports: [CommonModule, HttpClientModule, PhotoModule],
  exports: [PhotoDetailComponent]
})
export class PhotoDetailModule {}
