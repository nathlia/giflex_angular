import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { Subscription } from 'rxjs';
import { Artifact } from '../../models/artifact.model';
import { Character } from '../../models/character.model';
import { ArtifactsService } from '../../services/artifacts.service';
import { CharactersService } from '../../services/characters.service';
import { SelectImageService } from '../../services/select-image.service';


@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {  

  @ViewChild('screen')
  screen!: ElementRef;
  @ViewChild('canvas')
  canvas!: ElementRef;
  @ViewChild('downloadLink')
  downloadLink!: ElementRef;

  character: Character = {
    level: '',
    critRate: '',
    critDmg: '',
    equippedArtifacts: []
  };

  //artifacts: any;
  image: any;
  sub: Subscription = new Subscription;

  constructor(
    private characterService: CharactersService,
    private selectImageservice: SelectImageService,
    private artifactsService: ArtifactsService, 
    private route: ActivatedRoute
    )
     { }

  ngOnInit(): void {
    this.getCharacterById(this.route.snapshot.params["charaId"]);

    this.sub = this.route.params.subscribe(
      (params: any) => {
        let id = params['imageId'];
        this.image = this.selectImageservice.getImageById(id);
      }
    );    
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

  downloadImage(){
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'genshin_showcase.png';
      this.downloadLink.nativeElement.click();
    });
  }
  
}
