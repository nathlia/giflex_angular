import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtifactsService } from '../../../services/artifacts.service';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-add-artifact-form',
  templateUrl: './add-artifact-form.component.html',
  styleUrls: ['./add-artifact-form.component.css']
})
export class AddArtifactFormComponent implements OnInit { 

  artifact: any;
  chara: any;
  sub: Subscription = new Subscription;

  constructor(
    private artifactsService: ArtifactsService,
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let id = paramns['id'];
        this.artifact = this.artifactsService.getArtifactById(id);
      }
    );

    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.charactersService.getCharaByName(name);
      }
    );
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(form: any){
    console.log(form);
    console.log(this.artifact);
  }
}
