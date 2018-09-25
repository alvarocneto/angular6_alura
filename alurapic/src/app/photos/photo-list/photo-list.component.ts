import { PhotoService } from './../photo/photo.service';
import { Photo } from './../photo/photo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params.username;
    this.photoService.listFromUser(username).subscribe(photos => {
      this.photos = photos;
    });
  }
}
