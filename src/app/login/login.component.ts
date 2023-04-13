import { Component } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  User:user=new user("","");
message: string | undefined;
  getdata(){
    console.log(this.User);
    this.message="submitted";
  }

}
