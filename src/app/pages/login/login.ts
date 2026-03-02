import { Component } from '@angular/core';
import { ClefLoginForm } from './clef-login-form/clef-login-form';

@Component({
  selector: 'app-login',
  imports: [ClefLoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
