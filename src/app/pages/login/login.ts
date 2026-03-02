import { Component } from '@angular/core';
import { PageTitle } from '../../page-title/page-title';
import { ClefInput } from '../../components/clef-input/clef-input';

@Component({
  selector: 'app-login',
  imports: [PageTitle, ClefInput],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
