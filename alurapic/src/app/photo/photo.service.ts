import { Photo } from './photo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://localhost:3000/${username}/photos`);
  }
}
