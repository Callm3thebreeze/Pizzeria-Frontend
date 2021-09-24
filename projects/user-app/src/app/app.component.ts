import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpUserService } from './services/userservices';
import { User } from './userinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-app';
  constructor(private httpUserService: HttpUserService) {

  }



  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  user: User = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  }


  onSubmit() {
    this.user.name = this.userForm.get('name')?.value;
    this.user.lastname = this.userForm.get('lastname')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.password = this.userForm.get('password')?.value;
    const observer = this.httpUserService.addUser(JSON.parse(JSON.stringify(this.user)));
    const unsuscribe = observer.subscribe(() => {
      this.userForm.reset();
    });
  }
}