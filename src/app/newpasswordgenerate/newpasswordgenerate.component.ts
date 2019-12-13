import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectapiService } from '../projectapi.service';

@Component({
  selector: 'app-newpasswordgenerate',
  templateUrl: './newpasswordgenerate.component.html',
  styleUrls: ['./newpasswordgenerate.component.css']
})
export class NewpasswordgenerateComponent implements OnInit {
  changePasswordForm:FormGroup;

        constructor(public formBuilder: FormBuilder,private http:ProjectapiService,private router:Router){}

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }
  changePassword() {
    console.log(this.changePasswordForm.value);
    let obj = {
      emailId: this.changePasswordForm.value.emailId,
      oldpass: this.changePasswordForm.value.old_password,
      newpass: this.changePasswordForm.value.new_password
    }
    
    this.http
      .newuser(obj)
      .subscribe(data => {
        console.log('Success!',data);
        alert(data['message']);
        this.router.navigate(['/login']);
      },
      err =>{
        console.log('A problem occurred..');
      })
                 
  }
}
