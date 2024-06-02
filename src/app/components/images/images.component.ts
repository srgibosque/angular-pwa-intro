import { Component, OnInit } from '@angular/core';
import { ImagesService } from './../../services/images.service';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements OnInit {

  images: Image[] = [];

  constructor(private imagesService: ImagesService){}

  ngOnInit() {
    this.imagesService
      .getAllImages()
      .subscribe((images) => this.images = images);
  }
}
