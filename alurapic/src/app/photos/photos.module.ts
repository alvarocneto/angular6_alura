import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
  exports: [PhotoComponent],
  declarations: [PhotoComponent]
})
export class PhotosModule {}
