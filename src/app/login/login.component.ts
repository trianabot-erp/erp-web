import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectapiService } from '../projectapi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: ProjectapiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    console.log(JSON.stringify(this.loginForm.value));
    let obj = {
      emailId: this.loginForm.value.emailId,
      password: this.loginForm.value.password
    }
    this.http.login(obj).subscribe(data => {
      console.log("data from login service", data);
      
alert(data['message']);
    
        this.router.navigate(['/dashboard']);
    

    }, err => {
     if(err.status == 405){
      console.log("err", err['message']);
      this.router.navigate(['/newpasswordgenerate']);
     }
     else{
       alert("err");
     }
      

    })

    this.submitted = false;


    if (this.loginForm.invalid) {
      return;
    }


  }


}
