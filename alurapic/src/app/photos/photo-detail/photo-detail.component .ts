import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { AlertService } from './../../shared/componets/alert/alert.service';
import { Photo } from './../photo/photo.model';

@Component({
  templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {
  photoId: number;
  photo$: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.alertService.success('Photo removed');
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
        this.alertService.warning('Could not delete the photo!');
      }
    );
  }
}
