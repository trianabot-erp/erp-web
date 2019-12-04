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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    console.log(JSON.stringify(this.loginForm.value));
    let obj = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.http.login(obj).subscribe(data => {
      console.log("data from login service", data);
      

      if (data['message'] == "login success") {
        this.router.navigate(['/dashboard']);
      }
      else {

        alert("provide valid email and password");
      }


    }, err => {
      this.loginForm.reset();
      console.log("err", err['message']);

    })

    this.submitted = false;


    if (this.loginForm.invalid) {
      return;
    }


  }


}
