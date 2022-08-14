import { Component, Input, OnInit } from '@angular/core';
import { ArtifactSetType } from 'src/app/modules/home/models/artifact-set-type.model';
import { ArtifactSetTypeService } from 'src/app/modules/home/services/artifact-set-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-set',
  templateUrl: './add-set.component.html',
  styleUrls: ['./add-set.component.css']
})
export class AddSetComponent implements OnInit {

  @Input('artifact') artifactSetType: ArtifactSetType = {
    name: '',
    twopieces: '',
    fourpieces: ''
  };

  constructor(
    private artifactSetTypeService: ArtifactSetTypeService,
  ) { }

  ngOnInit(): void {
  }

  addSet(): void {
    console.log('Submitted Set:');
    console.log(this.artifactSetType);

    const data = {  
      name: this.artifactSetType?.name,
      twopieces: this.artifactSetType?.twopieces,
      fourpieces: this.artifactSetType?.fourpieces
    };

    this.artifactSetTypeService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          color: 'var(--main)',
          background: 'var(--primary)',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Registered successfully'
        })       
      },
      error: (e) => console.log(e),
    });
  }

  editSet(): void {
    this.artifactSetTypeService.update(this.artifactSetType?.id, this.artifactSetType).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.log(e),
    });
  }

  deleteSet(): void {
    console.log('Delete');
    this.artifactSetTypeService.delete(this.artifactSetType?.id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });  
  }
}
