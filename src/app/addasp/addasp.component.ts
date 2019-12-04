import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addasp',
  templateUrl: './addasp.component.html',
  styleUrls: ['./addasp.component.css']
})
export class AddaspComponent implements OnInit {
  aspform: FormGroup;
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.aspform = this.formBuilder.group({ 
      
      aspname: ['', Validators.required],
      email: ['', Validators.required],
      contactperson: ['', Validators.required],
      contactnumber: ['', Validators.required],
      alternatecontact: ['', Validators.required],
      state: ['', Validators.required],
      addressone: ['', Validators.required],
      addresstwo: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(JSON.stringify(this.aspform.value));
    this.aspform.reset();
  }
  viewproduct(){
    this.router.navigate(['/asp']);
  }
}
