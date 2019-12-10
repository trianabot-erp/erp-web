import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private router: Router, private formBuilder: FormBuilder, private http: ProjectapiService) { }

  ngOnInit() {
    this.adduserform = this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country:['', Validators.required],
      state:['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      pincode:['', Validators.required],
      gender:['', Validators.required],
      role:['', Validators.required]
    });
  }
  onSubmit() {
    console.log(JSON.stringify(this.adduserform.value));
    
  }

}
