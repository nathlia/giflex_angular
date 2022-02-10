import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../../models/character.model';
import { ArtifactsService } from '../../services/artifacts.service';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {

  character: Character = {
    level: '',
    critRate: '',
    critDmg: '',
    equippedArtifacts: []
  };

  // artifact: Artifact = {
  //   artifactType: '',
  //   artifactSetType: '',
  //   mainstat: '',
  //   mainStatValue: '',
  //   artifactSubstats: []
  // };

  // substat: Substat = {
  //   name: ''   
  // };

  //@Input('artifact') artifact: any;

  //artifacts: any;

  constructor(
    private artifactsService: ArtifactsService,
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.getCharacterById(this.route.snapshot.params["id"]);
    
    //this.getCharacterArtifact(this.character)
    //this.artifacts = this.artifactsService.getArtifacts();
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

}
