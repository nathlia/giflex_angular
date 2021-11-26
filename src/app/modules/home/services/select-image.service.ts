import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectImageService {
  images: any = [
    {
      id: 1   
    },
    {
      id: 2 
    },
    {
      id: 3
    },
    {
      id: 4
    }
  ];

  getImage(){
    return this.images;
  }

  getImageById(id: number){
    for (let i= 0; i< this.images.length; i++){
      let image = this.images[i];
      if (image.id == id){
        return image;
      }
    }
    return null;
  }

  constructor() { }
}
