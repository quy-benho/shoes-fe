import { Component } from '@angular/core';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  title = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
