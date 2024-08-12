import { Directive } from '@angular/core';
import { BaseComponent } from '../directives/base-component';
import { Base } from '../../core/models/base.model';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';

@Directive()
export abstract class BaseUserComponent<
  T extends Base
> extends BaseComponent<T> {
  constructor(public userService: UserService) {
    super();
  }

  override process(value: any) {
    console.log('BaseUserComponent process called with value:', value);

    const user: User = {
      username: value['user'] as string,
    };
    if (value['ids'].user) {
      user.id = value['ids'].user;
    }
    if (value['password']) {
      user['password'] = value['password'];
    }
    console.log('Constructed user object:', user);

    delete value['ids'];
    delete value['password'];
    value.user = user;

    console.log('Value after modifying user:', value);

    this.userService.getIdByUsername(user.username).subscribe({
      next: (id) => {
        console.log('getIdByUsername response id:', id);
        if (!user.id || (user.id && user.id !== id)) {
          window.alert('Username already exists! Please try again!');
          return;
        }
        super.process(value);
      },
      error: (err) => {
        console.error('getIdByUsername error:', err);
        super.process(value);
      },
    });
  }
}
