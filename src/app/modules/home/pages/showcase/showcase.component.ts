import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtifactsService } from '../../services/artifacts.service';
import { CharactersService } from '../../services/characters.service';
import { SelectImageService } from '../../services/select-image.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {  

  artifacts: any;
  image: any;
  chara: any;
  sub: Subscription = new Subscription;

  constructor(
    private charactersService: CharactersService,
    private selectImageservice: SelectImageService,
    private artifactsService: ArtifactsService, 
    private route: ActivatedRoute
    )
     { }

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
        this.image = this.selectImageservice.getImageById(id);
      }
    );

    this.artifacts = this.artifactsService.getArtifacts();
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  
}
