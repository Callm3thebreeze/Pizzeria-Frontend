import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../logininterface';
import { HttpUserService } from '../services/userservices';
import { IndexeddbService } from 'projects/core-library/src/public-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: HttpUserService, private router: Router, private indexeddbService: IndexeddbService) { 
    
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  

  onSubmit() {
    const observer = this.userservice.login(this.loginForm.value);
    const unsuscribe = observer.subscribe((data) => {
      if(data){
        this.indexeddbService.removeUser();
        this.indexeddbService.addUser(data);
        this.router.navigate(["user/register"]);
      }
    });
  }
  onRedirect(){
    this.router.navigate(["user/register"]);
  }
  
  ngOnInit(): void {
  }

}