import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../../../models/character.model';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.css']
})
export class AddCharacterFormComponent implements OnInit {

  character: Character = {
    level: '',
    critRate: '',
    critDmg: ''
  };

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacter(this.route.snapshot.params["id"]);
  }  

  getCharacter(id: string) {
    this.characterService.get(id).subscribe({
      next: (data) => {
        this.character = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });    
  }

  editCharacter(): void {   
    this.characterService.update(this.character.id, this.character).subscribe({
      next: (res) => {
        console.log(res);        
      },
      error: (e) => console.error(e)
    });
  } 
}
