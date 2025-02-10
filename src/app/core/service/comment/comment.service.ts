import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CommentDto} from "../../dto/CommentDto";
import {environment} from "../../../../environments/environment.development";
import {Comment} from "../../interface/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = environment.url;

  findAllComments():Observable<CommentDto[]>{

    return this.httpClient.get<Comment[]>(`${this.baseURL}/comments`).pipe(
      map(comment => comment.map(c=> new CommentDto(
        c.body,
        c.email,
        c.id,
        c.name,
        c.postId
      )))
    );
  }

}
