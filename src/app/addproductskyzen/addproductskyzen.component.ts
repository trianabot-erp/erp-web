import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Router}from '@angular/router';


@Component({
  selector: 'app-addproductskyzen',
  templateUrl: './addproductskyzen.component.html',
  styleUrls: ['./addproductskyzen.component.css']
})
export class AddproductskyzenComponent implements OnInit {
  productform: FormGroup;
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productform = this.formBuilder.group({ 
      
      brandname: ['', Validators.required],
      productname: ['', Validators.required],
      categoryname: ['', Validators.required],
      partdescription: ['', Validators.required],
      smu: ['', Validators.required],
      unitrate: ['', Validators.required],
      alternatesmu: ['', Validators.required]
    });
    
  }
  onSubmit() {
    console.log(JSON.stringify(this.productform.value));
    this.productform.reset();
  }
  viewproduct(){
    this.router.navigate(['/skyzenproducts']);
  }

}
