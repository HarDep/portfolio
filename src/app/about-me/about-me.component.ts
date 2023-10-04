import { Component } from '@angular/core';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  pdf:string = '';

  constructor(){
    this.pdf = environment.urlpdf;
  }

}
