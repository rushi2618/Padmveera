import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password="password"
  eyeopen:boolean=false;
   vision(){
     this.eyeopen=!this.eyeopen;
     if(this.eyeopen)
       {
         this.password="text";
       }
       else{
         this.password="password";
       }
   }
}
