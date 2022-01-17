import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtifactSetType } from '../../../models/artifact-set-type.model';
import { ArtifactType } from '../../../models/artifact-type.model';
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

  artifact: any;
  chara: any;
  subscription: Subscription = new Subscription;

  constructor(
    private artifactTypeService: ArtifactTypeService,
    private artifactSetTypeService: ArtifactSetTypeService,
    private substatService: SubstatService,
    private artifactsService: ArtifactsService,
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getType();
    this.getSet();
    this.getSubstat();

    this.subscription = this.route.params.subscribe(
      (paramns: any) => {
        let id = paramns['id'];
        this.artifact = this.artifactsService.getArtifactById(id);
      }
    );

    this.subscription = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.charactersService.getCharaByName(name);
      }
    );
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
   
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: any){
    console.log(form);
    console.log(this.artifact);
  }
}
