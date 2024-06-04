import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit {

  image!: Image;

  constructor(
    private imagesService: ImagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      this.imagesService.getImage(id)
        .subscribe((image) => {
          
          if(!image){
            this.router.navigateByUrl('/')
          }

          this.image = image
        });
    }

  }
}
