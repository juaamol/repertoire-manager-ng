import { Component, signal } from '@angular/core';
import { FormField, form, required, email, minLength, pattern } from '@angular/forms/signals';
import { Input } from '../../components/forms/input/input';
import { Pentagram } from '../../components/forms/pentagram/pentagram';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [Input, FormField, Pentagram],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });

    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Password requires at least 8 characters' });
    pattern(
      schemaPath.password,
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/,
      {
        message: 'Password must have at least one letter, one number and one special character',
      },
    );
  });

  onSubmit(event: Event) {
    event.preventDefault();
    const credentials = this.loginModel();
    console.log(credentials);
  }
}
