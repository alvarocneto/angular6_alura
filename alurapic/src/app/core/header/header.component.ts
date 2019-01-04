import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ap-header',
  template: `
    <header class="sticky-top">
      <nav class="navbar navbar-light bg-white">
        <a class="navbar-brand">ALURAPIC</a>
        <div>
          <i class="fa fa-user-circle"></i> <a class="ml-2">{{ user?.name }}</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  user: User;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe((user) => (this.user = user));
  }

  ngOnInit() {}
}
