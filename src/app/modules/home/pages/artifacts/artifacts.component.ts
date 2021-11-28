import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtifactsService } from '../../services/artifacts.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {

  artifact: any;
  sub: Subscription = new Subscription;

  constructor(
    private artifactsService: ArtifactsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let id = paramns['id'];
        this.artifact = this.artifactsService.getArtifactById(id);
      }
    );
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
