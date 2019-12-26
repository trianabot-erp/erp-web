import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ProjectapiService } from '../projectapi.service';

@Component({
  selector: 'app-productaddcategory',
  templateUrl: './productaddcategory.component.html',
  styleUrls: ['./productaddcategory.component.css']
})
export class ProductaddcategoryComponent implements OnInit {
addcat:FormGroup;

  constructor(private roter:Router, private fb:FormBuilder,private http:ProjectapiService) {
   
   }

  ngOnInit() {
    this.addcat = this.fb.group({
      catId:[''],
      catName:[''],
      catAliasName:[''],
      catModel:[''],
      catLogo:[''],
      brand:['']
    });
  }
  onSubmit(data){
this.http.createcat(data).subscribe(data=>{})
    console.log(this.addcat.value)
  }
  viewcategory(){
    this.roter.navigate(['/productcategory'])
  }
}
