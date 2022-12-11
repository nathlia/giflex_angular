import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ArtifactSetType } from '../../../models/artifact-set-type.model';
import { Character } from '../../../models/character.model';
import { ArtifactSetTypeService } from '../../../services/artifact-set-type.service';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-register-character',
  templateUrl: './register-character.component.html',
  styleUrls: ['./register-character.component.css']
})
export class RegisterCharacterComponent implements OnInit {

  characters?: Character[];
  selectedCharacter = Character;
  character: Character = {
    level: '',
    critRate: '',
    critDmg: '',
  };

  isEdit: boolean = false;
  openAccordion: boolean[] = []

  constructor(
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    this.characterService.getAll().subscribe({
      next: (data) => {
        this.characters = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  addCharacter(): void {
    console.log('Submitted Character:');
    console.log(this.character);

    const data = {  
      name: this.character?.name,
      twopieces: this.character?.critRate,
      fourpieces: this.character?.critDmg
    };

    this.characterService.create(data).subscribe({
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

  editCharacter(): void {
    this.characterService.update(this.character?.id, this.character).subscribe({
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

  deleteCharacter(id?: Number): void {
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
      console.log(this.character?.id);
      console.log(id);
      if (result.isConfirmed) {
        this.characterService.delete(id).subscribe({
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

  onClick(selectedCharacter: ArtifactSetType) {
    this.character = selectedCharacter;
    console.log(selectedCharacter);
    this.isEdit = true;
  }

  clear() {
    this.character = new Character();
    this.isEdit = false;
  }

}
