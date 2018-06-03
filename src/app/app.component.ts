import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User model';

  constructor(private userService: UserService){}

  users = [];

  addUser(newId, newName ,newPass){ 
    this.userService.store({id:newId.value, name:newName.value, pass:newPass.value, registerUser:true})
     .subscribe(
       (response) => console.log(response),
       (error)    => console.log(error)
     );

    this.users.push({id:newId.value, name:newName.value, pass:newPass.value, registerUser:true});
  }
}
