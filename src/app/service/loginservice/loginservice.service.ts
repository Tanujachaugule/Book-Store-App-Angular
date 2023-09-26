// login.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Replace this with actual authentication logic
  login(username: string, password: string): boolean {
    if (username === 'yourUsername' && password === 'yourPassword') {
      // Authentication successful
      return true;
    } else {
      // Authentication failed
      return false;
    }
  }
}

