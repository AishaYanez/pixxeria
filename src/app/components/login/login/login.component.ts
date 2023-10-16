import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!:string;
  password!:string;

  login(loginForm: NgForm){
    if (loginForm.valid) {
      console.log('hola');
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
}
