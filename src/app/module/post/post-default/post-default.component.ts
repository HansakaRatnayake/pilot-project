import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../core/service/post/post.service";
import {PostDto} from "../../../core/dto/PostDto";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-post-default',
    imports: [
        NgForOf
    ],
    templateUrl: './post-default.component.html',
    styleUrl: './post-default.component.scss'
})
export class PostDefaultComponent implements OnInit{

  constructor(private postService:PostService) {
  }

  posts:PostDto[] = [];

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts(){
    this.postService.findAllPosts().subscribe({
      next:(data) => this.posts = data,
      error:(error) => console.log(error),
      complete:() => console.log("Post fetching completed")
    })
  }
}
