import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/modules/home/models/character.model';
import { ArtifactsService } from '../../services/artifacts.service';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-artifact-set-show',
  templateUrl: './artifact-set-show.component.html',
  styleUrls: ['./artifact-set-show.component.css'],
})
export class ArtifactSetShowComponent implements OnInit {

  character: Character = {
    level: '',
    critRate: '',
    critDmg: ''
  };

  @Input('artifact') artifact: any;

  artifacts: any;

  constructor(
    private artifactsService: ArtifactsService,
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.getCharacterById(this.route.snapshot.params["id"]);

    this.artifacts = this.artifactsService.getArtifacts();
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
