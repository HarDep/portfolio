import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formName:string = '';

  formEmail:string = '';

  formPhone:string = '';

  formMessage:string = '';

  isSent=true;

  send(e:Event, ngForm: NgForm){
    e.preventDefault();
    emailjs.sendForm('service_ajy5r8u', 'template_i8nn1ig', e.target as HTMLFormElement, '9-4kKk4M25x5D32fm')
      .then((result: EmailJSResponseStatus) => {
        if(result.text != 'OK'){
          this.isSent = false;
        }
        console.log(result.text);
      }, (error) => {
        this.isSent = false;
        console.log(error.text);
      });
    this.formName = "";
    this.formEmail = "";
    this.formPhone = "";
    this.formMessage = "";
    ngForm.reset();
  }

}
