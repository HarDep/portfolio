import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Portfolio';
  isLight = true;
  body:HTMLElement = document.querySelector('body');

  changeTheme(){
    if(this.isLight){
      this.body.setAttribute('data-bs-theme','dark');
      this.isLight=false;
    }else{
      this.body.setAttribute('data-bs-theme','light');
      this.isLight=true;
    }
  }
}
