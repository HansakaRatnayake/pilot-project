import {Photo} from "../interface/Photo";

export class PhotoDto implements Photo{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;


  constructor(albumId: number, id: number, title: string, url: string, thumbnailUrl: string) {
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }
}
