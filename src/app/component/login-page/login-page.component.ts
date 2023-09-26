// login-page.component.ts
import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/loginservice/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html', 
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formData = { username: '', password: '' };

  constructor(private loginService: LoginService) {}

  onSubmit() {
    const { username, password } = this.formData;
    if (this.loginService.login(username, password)) {
      // Authentication successful, redirect to a different page
      // You can use Angular Router for navigation
    } else {
      // Authentication failed, show an error message
    }
  }
}
