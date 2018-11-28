import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { VMessageModule } from './shared/componets/vmessage/vmessage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    VMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
