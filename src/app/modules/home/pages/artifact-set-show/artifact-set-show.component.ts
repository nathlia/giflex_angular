import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/modules/home/models/character.model';
import { ArtifactsService } from '../../services/artifacts.service';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-artifact-set-show',
  templateUrl: './artifact-set-show.component.html',
  styleUrls: ['./artifact-set-show.component.css'],
})
export class ArtifactSetShowComponent implements OnInit {

  // chara?: Character[];

  // sub: Subscription = new Subscription();

  // constructor(
  //   private charactersService: CharactersService,
  //   private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.getCharacters();    

  //   this.sub = this.route.params.subscribe((paramns: any) => {
  //     let name = paramns['name'];
  //     this.getcharacterByName(name);
  //   });
          
  // }

  // getCharacters(): void {
  //   this.charactersService.getAll().subscribe({
  //     next: (data) => {
  //       this.chara = data;
  //       console.log(data);
  //     },
  //     error: (e) => console.error(e)
  //   });
  // }
  
  // getcharacterByName(name: string): void {
  //   this.charactersService.findByName(name).subscribe({
  //     next: (data) => {
  //       this.chara = data;
  //       console.log(data);
  //     },
  //     error: (e) => console.error(e)
  //   });
  // }

  @Input('artifact') artifact: any;

  artifacts: any;
  chara: any;
  sub: Subscription = new Subscription();

  constructor(
    private artifactsService: ArtifactsService,
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((paramns: any) => {
      let name = paramns['name'];
      this.chara = this.charactersService.getCharaByName(name);
    });

    this.artifacts = this.artifactsService.getArtifacts();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
