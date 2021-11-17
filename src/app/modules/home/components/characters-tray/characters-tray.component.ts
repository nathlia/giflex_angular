import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-tray',
  templateUrl: './characters-tray.component.html',
  styleUrls: ['./characters-tray.component.css']
})
export class CharactersTrayComponent implements OnInit {

  chara: string = 'Xiao';

  constructor() { }

  ngOnInit(): void {
  }

}
