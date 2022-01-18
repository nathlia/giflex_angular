import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { Subscription } from 'rxjs';
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
    critDmg: ''
  };

  artifacts: any;
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
      (paramns: any) => {
        let id = paramns['imageId'];
        this.image = this.selectImageservice.getImageById(id);
      }
    );

    this.artifacts = this.artifactsService.getArtifacts();
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
   
  ngOnDestroy() {
    this.sub.unsubscribe();
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
