import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  chara: any = {
    id: 1,
    name: 'Xiao',
    critRate: '',
    critDMg: ''
  };

  // url: string = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Xiao_Thumb.png/revision/latest/scale-to-width-down/256?cb=20210214012045';
  url: string = './assets/img/character/Xiao.png';

  // @Input('characterId') id: number = 0;

  // getCharaName() {
  //   if (this.chara.id === this.id) {
  //     return this.chara.name;
  //   }  
  // }

  constructor() { }

  ngOnInit(): void {
  }
}
