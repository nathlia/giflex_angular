import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  imageId1 = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
