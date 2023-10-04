import { Component } from '@angular/core';
import { environment } from '../../environment/environment.prod';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  url_404:string = '';

  constructor(){
    this.url_404 = environment.url404;
  }

}
