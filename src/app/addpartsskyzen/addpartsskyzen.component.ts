import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Router}from '@angular/router';

@Component({
  selector: 'app-addpartsskyzen',
  templateUrl: './addpartsskyzen.component.html',
  styleUrls: ['./addpartsskyzen.component.css']
})
export class AddpartsskyzenComponent implements OnInit {
  partsform: FormGroup;
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.partsform = this.formBuilder.group({ 
      
      brandname: ['', Validators.required],
      partname: ['', Validators.required],
      categoryname: ['', Validators.required],
      partdescription: ['', Validators.required],
      smu: ['', Validators.required],
      unitrate: ['', Validators.required],
      alternatesmu: ['', Validators.required]
    });
  }
  viewpart(){
    this.router.navigate(['/skyzenparts']);
  }
}
