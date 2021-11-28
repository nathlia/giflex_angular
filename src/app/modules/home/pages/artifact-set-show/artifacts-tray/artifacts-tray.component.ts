import { Component, OnInit } from '@angular/core';
import { ArtifactsService } from '../../../services/artifacts.service';

@Component({
  selector: 'app-artifacts-tray',
  templateUrl: './artifacts-tray.component.html',
  styleUrls: ['./artifacts-tray.component.css']
})
export class ArtifactsTrayComponent implements OnInit {

  artifacts: any;

  constructor(
    private artifactsService: ArtifactsService
  ) { }

  ngOnInit(): void {
    this.artifacts = this.artifactsService.getArtifacts();
  }

}
