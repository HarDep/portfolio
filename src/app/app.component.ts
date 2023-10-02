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

  constructor(){
    window.onscroll = () =>{
      if(document.documentElement.scrollTop > 120){
        document.querySelector('.go-top-cont').classList.add('show');
      }else{
        document.querySelector('.go-top-cont').classList.remove('show');
      }
    };
  }

  changeTheme(){
    if(this.isLight){
      this.body.setAttribute('data-bs-theme','dark');
      this.isLight=false;
    }else{
      this.body.setAttribute('data-bs-theme','light');
      this.isLight=true;
    }
  }

  goToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
