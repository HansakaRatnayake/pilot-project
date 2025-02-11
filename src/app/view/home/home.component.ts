import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../core/service/comment/comment.service";
import {CommentDto} from "../../core/dto/CommentDto";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-home',
    imports: [
        NgForOf
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private commentService:CommentService) {
  }

  comments: CommentDto[] = [];

  ngOnInit(): void {
    this.loadAllComments();
  }

  loadAllComments(){
    this.commentService.findAllComments().subscribe({
      next:(data) => this.comments = data,
      error :(error) => console.log(error),
      complete:() => {console.log("Completed")}
    })
  }


  protected readonly Comment = Comment;
}
