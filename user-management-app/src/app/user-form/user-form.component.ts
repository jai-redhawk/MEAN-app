import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = { username: '', email: '', password: '' };

  constructor(private userService: UserService) { }

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe(newUser => {
      console.log('User created:', newUser);
    });
  }
}
