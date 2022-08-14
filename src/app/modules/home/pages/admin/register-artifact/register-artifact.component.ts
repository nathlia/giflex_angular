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

  isEdit: boolean = false;

  sets: ArtifactSetType [] = [];
  selectedSet = ArtifactSetType;

  openAccordion: boolean[] = []


  artifactSetType: ArtifactSetType = {
    name: '',
    twopieces: '',
    fourpieces: ''
  };

  constructor(
    private artifactSetTypeService: ArtifactSetTypeService,
  ) { }

  ngOnInit(): void {
    this.getSet();
  }

  getSet() {
    this.artifactSetTypeService.getAll().subscribe({
      next: (data) => {
        this.sets = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
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
        window.location.reload()  
      },
      error: (e) => console.log(e),
    });
  }

  editSet(): void {
    this.artifactSetTypeService.update(this.artifactSetType?.id, this.artifactSetType).subscribe({
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
          title: 'Edited successfully'
        }) 
        window.location.reload()      
      },
      error: (e) => console.log(e),
    });
  }

  deleteSet(id: Number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      color: 'var(--primary)',
      background: 'var(--main)',    
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#9075f3',      
      confirmButtonText: 'Delete'
    }).then((result) => {
      console.log(this.artifactSetType?.id);
      console.log(id);
      if (result.isConfirmed) {
        this.artifactSetTypeService.delete(id).subscribe({
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
              title: 'Deleted successfully'
            })       
            window.location.reload()  
          },
          error: (e) => console.error(e),
        });          
      }
    })
    
    
  }

  onClick(selectedSet: ArtifactSetType) {
    this.artifactSetType = selectedSet;
    console.log(selectedSet);
    this.isEdit = true;
  }

  clear() {
    this.artifactSetType = new ArtifactSetType();
    this.isEdit = false;
  }

}
