import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../../../models/character.model';
import { ArtifactsService } from '../../../services/artifacts.service';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-artifacts-tray',
  templateUrl: './artifacts-tray.component.html',
  styleUrls: ['./artifacts-tray.component.css']
})
export class ArtifactsTrayComponent implements OnInit {

  @Input() character: Character = { 
      level: '',
      critRate: '',
      critDmg: ''   
  };

  artifacts: any;

  sub: Subscription = new Subscription;

  constructor(
    private artifactsService: ArtifactsService,
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) { }

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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
