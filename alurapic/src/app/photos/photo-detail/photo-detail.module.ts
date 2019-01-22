import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailComponent } from './photo-detail.component ';

@NgModule({
  declarations: [PhotoDetailComponent, PhotoCommentsComponent],
  imports: [CommonModule, HttpClientModule, PhotoModule, RouterModule],
  exports: [PhotoDetailComponent, PhotoCommentsComponent]
})
export class PhotoDetailModule {}
