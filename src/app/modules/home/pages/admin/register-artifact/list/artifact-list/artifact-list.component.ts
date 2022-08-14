import { Component, Input, OnInit } from '@angular/core';
import { ArtifactSetType } from 'src/app/modules/home/models/artifact-set-type.model';
import { ArtifactSetTypeService } from 'src/app/modules/home/services/artifact-set-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrls: ['./artifact-list.component.css']
})
export class ArtifactListComponent implements OnInit {
  openAccordion: boolean[] = []


  artifactSetType?: ArtifactSetType [];

  constructor(
    private artifactSetTypeService: ArtifactSetTypeService,
  ) { }

  ngOnInit(): void {
    this.getSet();
  }

  getSet() {
    this.artifactSetTypeService.getAll().subscribe({
      next: (data) => {
        this.artifactSetType = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

 

}
