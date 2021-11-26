import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-tray',
  templateUrl: './characters-tray.component.html',
  styleUrls: ['./characters-tray.component.css']
})
export class CharactersTrayComponent implements OnInit {

  //charaId: number = 1;

  charas: any[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charas = this.charactersService.getChara();
  }

}
