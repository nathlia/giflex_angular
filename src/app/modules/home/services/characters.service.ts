import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: any = [
    {
      id: 1,
      name: "Xiao",
      level: '90',
      critRate: '70',
      critDmg: '180.5',
  
    },
    {
      id: 2,
      name: "Tartaglia",
      level: '90',
      critRate: '75',
      critDmg: '135.7',
  
    }
  ];

  getChara(){
    return this.characters;
  }

  getCharaById(id: number){
    for (let i= 0; i< this.characters.length; i++){
      let character = this.characters[i];
      if (character.id == id){
        return character;
      }
    }
    return null;
  }

  getCharaByName(name: string){
    for (let i=0; i< this.characters.length; i++){
      let character = this.characters[i];
      if (character.name === name){
        return character;
      }
    }
    return null;
  }

  constructor() { }

}
