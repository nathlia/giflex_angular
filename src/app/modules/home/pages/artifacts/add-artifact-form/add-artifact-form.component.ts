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
  selector: 'app-add-artifact-form',
  templateUrl: './add-artifact-form.component.html',
  styleUrls: ['./add-artifact-form.component.css'],
})
export class AddArtifactFormComponent implements OnInit {
  charaId = '';
  index = [1, 2, 3, 4];
  isEdit : boolean = false;

  type?: ArtifactType[];
  set?: ArtifactSetType[];
  selectedArtifactSubstat?: ArtifactSubstat  = {
    substat: undefined,
    substatValue: '',
  };

  selectedArtifactSubstat1?: ArtifactSubstat  = {
    substat: undefined,
    substatValue: '',
  };

  selectedArtifactSubstat2?: ArtifactSubstat  = {
    substat: undefined,
    substatValue: '',
  };

  selectedArtifactSubstat3?: ArtifactSubstat  = {
    substat: undefined,
    substatValue: '',
  };
  selectedArtifactSubstats?: ArtifactSubstat[];
  
  substats?: Substat[];
  selectedSubstats?: Substat[];
  selectedSubstat?: Substat;
  substatValue?: number;

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
    // this.selectedArtifactSubstats = [
    //   {
    //     substat: {
    //       id: 0,
    //       name: ''
    //     },
    //     substatValue: 0
    //   }
    // ];     
  }

  ngOnInit(): void {    
    this.getType();
    this.getSet();
    this.getSubstat();
    this.getCharacterById(this.route.snapshot.params['charaId']);
    this.charaId = this.route.snapshot.params['charaId'];
  }

  setSelectedSubstat() {
    //this.selectedArtifactSubstats = this.artifact.artifactSubstats;  
    
   
    console.log('selectedArtifactSubstats: ')
    console.log(this.selectedArtifactSubstats)
  }

  getSelectedSubstats(){
    var counter = 0;
     if (this.selectedArtifactSubstats) {
       while (counter < 4) {
        for (let sub of this.selectedArtifactSubstats) { 
          
                
        }
      }
      
    }  
  
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

  getSet() {
    this.artifactSetTypeService.getAll().subscribe({
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
 
  addArtifact(): void {
    console.log('Submitted artifact:');   
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
}
