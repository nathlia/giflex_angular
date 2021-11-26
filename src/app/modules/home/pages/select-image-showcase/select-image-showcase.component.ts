import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { SelectImageService } from '../../services/select-image.service';

@Component({
  selector: 'app-select-image-showcase',
  templateUrl: './select-image-showcase.component.html',
  styleUrls: ['./select-image-showcase.component.css']
})
export class SelectImageShowcaseComponent implements OnInit {

  image: any;

  chara: any;
  sub: Subscription = new Subscription;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.charactersService.getCharaByName(name);        
      }
    );
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

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

}
