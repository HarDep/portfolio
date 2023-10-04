import { Component } from '@angular/core';
import { environment } from '../../environment/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  photo_url:string = '';

  constructor(){
    this.photo_url = environment.urlphoto;
  }
}
