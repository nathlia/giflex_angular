import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  charas: any[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charas = this.charactersService.getChara();
  }
}
