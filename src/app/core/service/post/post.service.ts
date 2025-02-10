import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {map, Observable} from "rxjs";
import {PhotoDto} from "../../dto/PhotoDto";
import {Photo} from "../../interface/Photo";
import {PostDto} from "../../dto/PostDto";
import {Post} from "../../interface/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = environment.url;

  findAllPosts():Observable<PostDto[]>{

    return this.httpClient.get<Post[]>(`${this.baseURL}/posts`).pipe(
      map(posts => posts.map(post=> new PostDto(
        post.body,
        post.id,
        post.title,
        post.userId
      )))
    );
  }
}
