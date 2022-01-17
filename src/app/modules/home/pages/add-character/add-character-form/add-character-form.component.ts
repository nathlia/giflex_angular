import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../../../models/character.model';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.css']
})
export class AddCharacterFormComponent implements OnInit {

  character: Character = {
    name: '',
    level: '',
    critRate: '',
    critDmg: ''
  };

  submitted = false;
  
  chara: any;
  sub: Subscription = new Subscription;

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.characterService.getCharaByName(name);
      }
    );
  }  
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(form: any){
    console.log(form);
    console.log(this.chara);
  }
}
