import {Component, OnInit} from '@angular/core';
import {PhotoDto} from "../../../core/dto/PhotoDto";
import {PhotoService} from "../../../core/service/photo/photo.service";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-photo-default',
    imports: [
        NgForOf
    ],
    templateUrl: './photo-default.component.html',
    styleUrl: './photo-default.component.scss'
})
export class PhotoDefaultComponent implements OnInit{

  photos:PhotoDto[] = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.loadAllPhotos();
  }

  loadAllPhotos(){
    this.photoService.findAllPhotos().subscribe({
      next:(data) => {this.photos = data},
      error:(error) => console.log(error),
      complete:() => console.log("Photos fetching completed")
    })
  }
}
