import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.css']
})
export class AddCharacterFormComponent implements OnInit {
  
  chara: any;
  sub: Subscription = new Subscription;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (paramns: any) => {
        let name = paramns['name'];
        this.chara = this.charactersService.getCharaByName(name);
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
