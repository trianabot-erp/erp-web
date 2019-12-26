import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectapiService } from '../projectapi.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  adduserform: FormGroup;
  submitted = false;
  rolelist: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: ProjectapiService) { }

  ngOnInit() {
    this.adduserform = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      pincode: ['', Validators.required],
      gender: ['', [Validators.required]],
      role: ['', Validators.required],
      completeAddress:['', Validators.required]
    });
    this.getroledata();
  }
  

  getroledata() {
    this.http.roledata().subscribe(data => {
      this.rolelist = data['data'];
      console.log(this.rolelist);
    })
  }
  getrolelist(event) {
    console.log(event.detail.value);
    var i;
    for (i = 0; i < this.rolelist.length; i++) {
      if (event.detail.value == this.rolelist[i]) {
        console.log(this.rolelist[i]);
      }
    }
  }
  onSubmit() {
    console.log(JSON.stringify(this.adduserform.value));
    let obj = {
      firstName: this.adduserform.value.firstname,
      lastName: this.adduserform.value.lastname,
      emailId: this.adduserform.value.emailId,
      country: this.adduserform.value.country,
      state: this.adduserform.value.state,
      mobile: this.adduserform.value.mobile,
      pinCode: this.adduserform.value.pincode,
      gender: this.adduserform.value.gender,
      role: this.adduserform.value.role,
      compleetAddress:this.adduserform.value.completeAddress

      
    }
    this.http.postuser(obj).subscribe(data => {
      console.log("data from postuser service", data);
      this.adduserform.reset();
      alert("user registeration is sucessfully")
      this.router.navigate(['/dashboard']);
    

    }, err => {
      console.log("err from userpost service", err);
      
    })	
  }
}

