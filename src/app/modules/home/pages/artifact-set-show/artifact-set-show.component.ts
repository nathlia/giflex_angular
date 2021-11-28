import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtifactsService } from '../../services/artifacts.service';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-artifact-set-show',
  templateUrl: './artifact-set-show.component.html',
  styleUrls: ['./artifact-set-show.component.css']
})
export class ArtifactSetShowComponent implements OnInit {

  @Input('artifact') artifact: any;

  artifacts: any;
  chara: any;
  sub: Subscription = new Subscription;

  constructor(
    private artifactsService: ArtifactsService,
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.charactersService.getCharaByName(name);
      }
    );

    this.artifacts = this.artifactsService.getArtifacts();
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
