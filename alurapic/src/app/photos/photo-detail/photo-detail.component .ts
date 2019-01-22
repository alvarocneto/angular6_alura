import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from './../photo/photo.model';

@Component({
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.css']
})
export class PhotoDetailComponent implements OnInit {
  photoId: number;
  photo$: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }
}
