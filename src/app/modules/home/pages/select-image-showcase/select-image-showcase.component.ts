import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';
import { SelectImageService } from '../../services/select-image.service';

@Component({
  selector: 'app-select-image-showcase',
  templateUrl: './select-image-showcase.component.html',
  styleUrls: ['./select-image-showcase.component.css']
})
export class SelectImageShowcaseComponent implements OnInit {

  images: any [] = [];

  character: Character = {
    level: '',
    critRate: '',
    critDmg: ''
  };

  selectImageService: any;

  constructor(
    private characterService: CharactersService,
    selectImageService: SelectImageService,
    private route: ActivatedRoute) { 
      this.selectImageService = selectImageService;
    }

  ngOnInit(): void {
   this.getCharacterById(this.route.snapshot.params["id"]);
   this.images = this.selectImageService.getImage();
  }    

  getCharacterById(id: string) {
    this.characterService.get(id).subscribe({
      next: (data) => {
        this.character = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });    
  }
}
