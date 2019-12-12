import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-productaddcategory',
  templateUrl: './productaddcategory.component.html',
  styleUrls: ['./productaddcategory.component.css']
})
export class ProductaddcategoryComponent implements OnInit {
addcategory:FormGroup;

  constructor(private roter:Router, private fb:FormBuilder) {
    this.addcategory = this.fb.group({
      categoryname:['', Validators.required],
      selectbrand:['', Validators.required]
    });
   }

  ngOnInit() {
  }
  viewcategory(){
    this.roter.navigate(['/productcategory'])
  }
}
