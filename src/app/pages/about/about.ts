import { Component } from '@angular/core';
import { TextStyle } from '../../text-style';

@Component({
  imports: [TextStyle],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  isActive = false;

  isLoggedIn = true;

  role = "admin";
  // users = [ "John", "Jane", "Alice", "Bob" ];
  users = []

  status='inactive';
}
