import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artifact-set-show',
  templateUrl: './artifact-set-show.component.html',
  styleUrls: ['./artifact-set-show.component.css']
})
export class ArtifactSetShowComponent implements OnInit {

  chara: any = {
    id: 1,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
