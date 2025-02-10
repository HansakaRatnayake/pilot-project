import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {map, Observable} from "rxjs";
import {PhotoDto} from "../../dto/PhotoDto";
import {Photo} from "../../interface/Photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = environment.url;

  findAllPhotos():Observable<PhotoDto[]>{

    return this.httpClient.get<Photo[]>(`${this.baseURL}/photos`).pipe(
      map(photos => photos.map(photo=> new PhotoDto(
        photo.albumId,
        photo.id,
        photo.title,
        photo.url,
        photo.thumbnailUrl
      )))
    );
  }
}
