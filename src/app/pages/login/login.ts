import { Component } from '@angular/core';
import { PageTitle } from '../../page-title/page-title';
import { ClefInput } from '../../components/clef-input/clef-input';
import { ClefLoginForm } from './clef-login-form/clef-login-form';

@Component({
  selector: 'app-login',
  imports: [PageTitle, ClefLoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
