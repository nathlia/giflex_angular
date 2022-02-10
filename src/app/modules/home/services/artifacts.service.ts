import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artifact } from '../models/artifact.model';

const baseUrl = 'http://localhost:8080/artifacts';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Artifact[]> {
    return this.http.get<Artifact[]>(baseUrl);
  }

  get(id: any): Observable<Artifact> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }  
  
// ! old
  artifacts: any = [
    {
      id: 1,
      set: "Viridescent Venerer",
      type: "Flower",
      mainstat: "HP",
      substats: [] = [
        'Energy Recharge+11',
        'Elemental Mastery+23',
        'CRIT Rate%+16',
        'CRIT DMG%+7'
      ]   
    },
    {
      id: 2,
      set: "Gladiator's Finale",
      type: "Plume",
      mainstat: "ATK",
      substats: [] = [
        'ATK%+3.3',
        'Elemental Mastery+13',
        'CRIT Rate%+6',
        'CRIT DMG%+20'
      ]   
    }   
  ]

  getArtifacts() {
    return this.artifacts;
  }

  getArtifactById (id: number) {
    for (let i= 0; i< this.artifacts.length; i++){
      let artifact = this.artifacts[i];
      if (artifact.id == id){
        return artifact;
      }
    }
    return null;
  }

  // constructor() { }
}
