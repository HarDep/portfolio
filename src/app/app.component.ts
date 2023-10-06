import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Portfolio';
  isLight = true;
  private body:HTMLElement = document.querySelector('body');
  private toTopButton: HTMLElement = null;

  constructor(){
    window.onscroll = () => {
      if(this.toTopButton == null){
        this.toTopButton =  document.querySelector('.go-top-cont');
      }
      if(document.documentElement.scrollTop > 100){
        this.toTopButton.classList.add('show');
      }else{
        this.toTopButton.classList.remove('show');
      }
    };
    this.putTheme();
  }

  private putTheme(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches === true){
      this.body.setAttribute('data-bs-theme','dark');
      this.isLight = false;
    }else{
      this.body.setAttribute('data-bs-theme','light');
    }
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
