import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artifact } from '../../../models/artifact.model';
import { Character } from '../../../models/character.model';
import { Substat } from '../../../models/substat.model';
import { ArtifactsService } from '../../../services/artifacts.service';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-showcase-artifact',
  templateUrl: './showcase-artifact.component.html',
  styleUrls: ['./showcase-artifact.component.css']
})
export class ShowcaseArtifactComponent implements OnInit {

  array = [1, 2, 3, 4, 5];

  character: Character = {
    level: '',
    critRate: '',
    critDmg: '',
    equippedArtifacts: []
  };  

  //   artifact: Artifact = {
  //   artifactType: '',
  //   artifactSetType: '',
  //   mainstat: '',
  //   mainStatValue: '',
  //   artifactSubstats: []
  // };

  // substat: Substat = {
  //   name: ''   
  // };

  constructor(
    private artifactsService: ArtifactsService,
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {   
    this.getCharacterById(this.route.snapshot.params["charaId"]);
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
