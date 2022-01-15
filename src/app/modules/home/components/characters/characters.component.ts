import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { getLineAndCharacterOfPosition } from 'typescript';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters?: Character[];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();    
  }

  getCharacters(): void {
    this.charactersService.getAll().subscribe({
      next: (data) => {
        this.characters = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
