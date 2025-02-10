import {Comment} from "../interface/Comment";

export class CommentDto implements Comment{
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;

  constructor(body: string, email: string, id: number, name: string, postId: number) {
    this.body = body;
    this.email = email;
    this.id = id;
    this.name = name;
    this.postId = postId;
  }

}
