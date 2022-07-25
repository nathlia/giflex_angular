import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ArtifactSetType } from '../../../models/artifact-set-type.model';
import { ArtifactSetTypeService } from '../../../services/artifact-set-type.service';

@Component({
  selector: 'app-register-artifact',
  templateUrl: './register-artifact.component.html',
  styleUrls: ['./register-artifact.component.css']
})
export class RegisterArtifactComponent implements OnInit {

  artifactSetType: ArtifactSetType = {
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
