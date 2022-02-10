import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/modules/home/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input('chara') chara: any;

  constructor() { }

  ngOnInit(): void {    
  }

  // getImage() {
  //   return "./assets/img/character/"+this.chara.name+".png";
  // }
}
