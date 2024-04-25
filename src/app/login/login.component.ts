import { RestService } from './../rest.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Password="password"
 eyeopen:boolean=false;

loginform = new FormGroup({
  email : new FormControl(''),
  password : new FormControl('')
});
 constructor(private rest:RestService, private router:Router){}

  vision(){
    this.eyeopen=!this.eyeopen;
    if(this.eyeopen){
      this.Password="text";
    }else{
      this.Password="password";
    }
  }

  loginpage(){
    this.rest.showLoader(true);
    let type = 'login'
    let obj = this.loginform.value;
    this.rest.PostApi(type,obj).subscribe((data:any)=>{
      sessionStorage.setItem('username', data.user.name);
      sessionStorage.setItem('userID', data.user.id);
      sessionStorage.setItem('userRole', data.user.role);
      sessionStorage.setItem('userEmail', data.user.email);
      this.rest.showLoader(false);
      Swal.fire('success', "Login Successful", 'success');
      this.router.navigate(['homepage/dashboard']);
    },err => {
      Swal.fire('error', "Login Unsuccessful!  Please Check Your Email & Password", 'error');
    });
  }
}
