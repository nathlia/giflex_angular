import { Component, OnInit } from '@angular/core';
import { ArtifactsService } from '../../../services/artifacts.service';

@Component({
  selector: 'app-showcase-artifact',
  templateUrl: './showcase-artifact.component.html',
  styleUrls: ['./showcase-artifact.component.css']
})
export class ShowcaseArtifactComponent implements OnInit {

  artifacts: any; 

  constructor(
    private artifactsService: ArtifactsService
  ) {}

  ngOnInit(): void {
    this.artifacts = this.artifactsService.getArtifacts();
  }  
}
