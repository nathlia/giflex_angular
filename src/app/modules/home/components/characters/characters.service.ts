import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: any = [
    {
      id: 1,
      name: "Xiao",
      critRate: '',
      critDMg: '',
  
    },
    {
      id: 2,
      name: "Tartaglia",
      critRate: '',
      critDMg: '',
  
    }
  ];

  getChara(){
    return this.characters;
  }

  getCharaList(id: number){
    for (let i=0; i<this.characters.length; i++){
      let characters = this.characters[i];
      if (characters.id == id){
        return characters;
      }
    }
    return null;
  }

  constructor() { }

}
