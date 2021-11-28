import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  artifacts: any = [
    {
      id: 1,
      set: "Virisdecent Veneer",
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
    },
    {
      id: null,
      set: null,
      type: null,
      mainstat: null,
      substats: [] = [
        null
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

  constructor() { }
}
