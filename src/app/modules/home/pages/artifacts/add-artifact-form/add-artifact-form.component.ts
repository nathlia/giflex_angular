import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtifactSetType } from '../../../models/artifact-set-type.model';
import { ArtifactType } from '../../../models/artifact-type.model';
import { Artifact } from '../../../models/artifact.model';
import { Character } from '../../../models/character.model';
import { Substat } from '../../../models/substat.model';
import { ArtifactSetTypeService } from '../../../services/artifact-set-type.service';
import { ArtifactTypeService } from '../../../services/artifact-type.service';
import { ArtifactsService } from '../../../services/artifacts.service';
import { CharactersService } from '../../../services/characters.service';
import { SubstatService } from '../../../services/substat.service';

@Component({
  selector: 'app-add-artifact-form',
  templateUrl: './add-artifact-form.component.html',
  styleUrls: ['./add-artifact-form.component.css']
})
export class AddArtifactFormComponent implements OnInit { 

  type?: ArtifactType[];
  set?: ArtifactSetType[];
  substat?: Substat[];

  character: Character = {
    name: '',
    level: '',
    critRate: '',
    critDmg: '',
    equippedArtifacts: [] 
  };

    artifact: Artifact = {
    artifactType: '',
    artifactSetType: '',
    mainstat: '',
    mainStatValue: '',
    artifactSubstats: []
  };  

  //! old
  //artifact: any;
  subscription: Subscription = new Subscription;
  //! old

  constructor(
    private artifactTypeService: ArtifactTypeService,
    private artifactSetTypeService: ArtifactSetTypeService,
    private substatService: SubstatService,
    private artifactsService: ArtifactsService,
    private characterService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {   

    this.getType();
    this.getSet();
    this.getSubstat();

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

  getType() {
    this.artifactTypeService.getAll().subscribe({
      next: (data) => {
        this.type = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  getSet() {
    this.artifactSetTypeService.getAll().subscribe({
      next: (data) => {
        this.set = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  getSubstat() {
    this.substatService.getAll().subscribe({
      next: (data) => {
        this.substat = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  onSubmit(form: any){
    console.log(form);
    //console.log(this.character.equippedArtifacts);
  }
}
