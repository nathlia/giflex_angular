import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IndexedAccessType } from 'typescript';
import { ArtifactSetType } from '../../../models/artifact-set-type.model';
import { ArtifactSubstat } from '../../../models/artifact-substat.model';
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
  selector: 'app-edit-artifact',
  templateUrl: './edit-artifact.component.html',
  styleUrls: ['./edit-artifact.component.css']
})
export class EditArtifactComponent implements OnInit {

  charaId = '';
  index = [1, 2, 3, 4];
  isEdit : boolean = false;

  type?: ArtifactType[];
  set?: ArtifactSetType[];
  selectedArtifactSubstats?: ArtifactSubstat[];
  substats?: Substat[];
  selectedSubstat?: Substat;

  character: Character = {
    name: '',
    level: '',
    critRate: '',
    critDmg: '',
    equippedArtifacts: [],
  };
  artifact: Artifact = {
    artifactType: '',
    artifactSetType: '',
    mainstat: '',
    mainStatValue: '',
    artifactSubstats: [],
  };

  selectedArtifact: Artifact = {
    artifactType: '',
    artifactSetType: '',
    mainstat: '',
    mainStatValue: '',
    artifactSubstats: [],
  };

  constructor(
    private artifactTypeService: ArtifactTypeService,
    private artifactSetTypeService: ArtifactSetTypeService,
    private substatService: SubstatService,
    private artifactsService: ArtifactsService,
    private characterService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.router.url.indexOf('edit') > -1) {
      console.log('Inside Edit');
      this.getArtifactById(this.route.snapshot.params['artId']);     
      
      this.isEdit = true;
    }   
    
    this.getType();
    this.getSet();
    this.getSubstat();
    this.getCharacterById(this.route.snapshot.params['charaId']);
    this.charaId = this.route.snapshot.params['charaId'];
  }

  setSelectedSubstat() {
    this.selectedArtifactSubstats = this.artifact.artifactSubstats;      
    console.log('selectedArtifactSubstats: ')
    console.log(this.selectedArtifactSubstats)
  }

  getSelectedSubstatId() : number {
     if (this.selectedArtifactSubstats) {
      for (let sub of this.selectedArtifactSubstats) { 
        console.log('sub' + sub.substat!.id)      
        if (sub.substat) {         
            this.selectedSubstat = sub.substat.id;
            console.log(sub.substat.id)              
            return sub.substat.id;
        }        
      }
    }  
    return 0;
  }

  getCharacterById(id: string) {
    this.characterService.get(id).subscribe({
      next: (data) => {
        this.character = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  getArtifactById(id: string) {
    this.artifactsService.get(id).subscribe({
      next: (data) => {
        this.artifact = data;      
        this.setSelectedSubstat();   
        this.selectedArtifact = this.artifact;     
        console.log(data);             
      },    
      error: (e) => console.error(e),
    });   
  }

  getType() {
    this.artifactTypeService.getAll().subscribe({
      next: (data) => {
        this.type = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  
  getTypeById() {
    this.artifactTypeService.get(this.artifact.artifactType.id).subscribe({
      next: (data) => {
        this.type = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  getSet() {
    this.artifactSetTypeService.getAll().subscribe({
      next: (data) => {
        this.set = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  getSetById() {
    this.artifactSetTypeService.get(this.artifact.artifactSetType.id).subscribe({
      next: (data) => {
        this.set = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  getSubstat() {
    this.substatService.getAll().subscribe({
      next: (data) => {
        this.substats = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  getSubstatById() {
    this.substatService.get(this.artifact.mainstat.id).subscribe({
      next: (data) => {
        this.artifact.mainstat = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  setSelectedArtifact() {  
    this.getSetById;
    this.getTypeById;
    this.getSubstatById; // mainstat            
    //this.artifact.artifactSubstats = this.selectedArtifact.artifactSubstats;    
  }

  addArtifact(): void {
    console.log('Submitted artifact:');
    this.setSelectedArtifact();
    console.log(this.artifact);   

    const data = {      
      artifactType: this.artifact.artifactType,
      artifactSetType: this.artifact.artifactSetType,
      mainstat: this.artifact.mainstat,
      mainStatValue: this.artifact.mainStatValue,
      // artifactSubstats:
    };
    charaId: this.charaId;

    this.artifactsService.create(data, this.charaId).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

  editArtifact(): void {
    this.artifactsService.update(this.artifact.id, this.artifact).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.log(e)
    });
  }

  deleteArtifact(): void {
    console.log('Delete');    
    this.artifactsService.delete(this.artifact.id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }
}
