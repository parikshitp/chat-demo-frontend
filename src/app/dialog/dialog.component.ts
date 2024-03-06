import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  username: string = '';

  constructor(private router: Router, private usernameService: UsernameService) { }

  login(): void {
    if (this.username.trim() !== '') {

      this.usernameService.setUsername(this.username);
      // Navigate to chat component
      this.router.navigate(['/chat']);
    } else {
      alert('Please enter a username.');
    }
  }
}
