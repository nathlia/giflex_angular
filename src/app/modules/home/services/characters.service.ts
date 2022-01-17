import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/modules/home/models/character.model';

const baseUrl = 'http://localhost:8080/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(baseUrl);
  }

  get(id: any): Observable<Character> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/edit`, data);
  }

  findByName(name: any): Observable<Character[]> {
    return this.http.get<Character[]>(`${baseUrl}?name=${name}`);
  }

  characters: any = [
    {
      id: 1,
      name: "Xiao",
      level: '90',
      critRate: '70',
      critDmg: '180.5',
  
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

  getCharaByName(name: any){
    for (let i=0; i< this.characters.length; i++){
      let character = this.characters[i];
      if (character.name === name){
        return character;
      }
    }
    return null;
  }
}
