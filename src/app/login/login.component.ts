import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email=''
  password=''

  constructor() { }

  ngOnInit(): void {
  }
  onCancel(){

  }

  onLogin(){
    console.log(`email=${this.email}`)
    console.log(`password=${this.password}`)

  }

}
