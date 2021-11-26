import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { SelectImageService } from '../../services/select-image.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {  

  image: any;
  chara: any;
  sub: Subscription = new Subscription;

  constructor(
    private charactersService: CharactersService,
    private selectImageservice: SelectImageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.charactersService.getCharaByName(name);
      }
    );

    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let id = paramns['id'];
        this.chara = this.selectImageservice.getImageById(id);
      }
    );
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
