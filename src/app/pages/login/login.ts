import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  username = '';
  password = '';

  private router = inject(Router);
  onSubmit() {
    console.log('Login submitted:', {
      username: this.username,
      password: this.password,
    });
    alert(`Logged in with Username: ${this.username}`);
    this.router.navigate(['/pages/home']);
  }
}
