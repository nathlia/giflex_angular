import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../../models/character.model';
import { ArtifactsService } from '../../services/artifacts.service';
import { CharactersService } from '../../services/characters.service';
import { SelectImageService } from '../../services/select-image.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {  

  character: Character = {
    level: '',
    critRate: '',
    critDmg: ''
  };

  artifacts: any;
  image: any;
  sub: Subscription = new Subscription;

  constructor(
    private characterService: CharactersService,
    private selectImageservice: SelectImageService,
    private artifactsService: ArtifactsService, 
    private route: ActivatedRoute
    )
     { }

  ngOnInit(): void {
    this.getCharacterById(this.route.snapshot.params["charaId"]);

    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let id = paramns['imageId'];
        this.image = this.selectImageservice.getImageById(id);
      }
    );

    this.artifacts = this.artifactsService.getArtifacts();
  }  

  getCharacterById(id: string) {
    this.characterService.get(id).subscribe({
      next: (data) => {
        this.character = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });    
  }
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  
}
