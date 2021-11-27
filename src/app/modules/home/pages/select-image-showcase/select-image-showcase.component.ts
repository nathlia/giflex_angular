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

  images: any [] = [];

  chara: any;
  sub: Subscription = new Subscription;
  selectImageService: any;

  constructor(
    private charactersService: CharactersService,
    selectImageService: SelectImageService,
    private route: ActivatedRoute) { 
      this.selectImageService = selectImageService;
    }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.charactersService.getCharaByName(name);        
      }
    );

   this.images = this.selectImageService.getImage();
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
