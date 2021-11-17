import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  toAddCharacter(e: MouseEvent) {
    // do stuff
   }

  constructor() { }

  ngOnInit(): void {
  }

}
