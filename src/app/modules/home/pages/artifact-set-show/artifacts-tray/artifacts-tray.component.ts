import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtifactSetType } from '../../../models/artifact-set-type.model';
import { Artifact } from '../../../models/artifact.model';
import { Character } from '../../../models/character.model';
import { Substat } from '../../../models/substat.model';
import { ArtifactsService } from '../../../services/artifacts.service';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-artifacts-tray',
  templateUrl: './artifacts-tray.component.html',
  styleUrls: ['./artifacts-tray.component.css']
})
export class ArtifactsTrayComponent implements OnInit {

  counter = 0;

  @Input() character: Character = { 
      level: '',
      critRate: '',
      critDmg: '',
      equippedArtifacts: []   
  };

  type?: ArtifactSetType;

  sub: Subscription = new Subscription;

  constructor(
    private artifactsService: ArtifactsService,
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) { 
   
  }

  ngOnInit(): void {
    this.getCharacterById(this.route.snapshot.params["id"]);
      
  }

  getCharacterById(id: string) {
    this.characterService.get(id).subscribe({
      next: (data) => {
        this.character = data;
        this.getArtifactNumber(); 
        console.log(data);
      },
      error: (e) => console.error(e)
    });    
  }

  getArtifactNumber() {
    let artifact = this.character.equippedArtifacts;
    if (artifact) {
        for (var a of artifact) {
          this.counter++;
      }
    }  
  }  
}
