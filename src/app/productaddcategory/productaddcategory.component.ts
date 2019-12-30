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
rolelist:any[];
brandLogo:File;
logodata:any;
selectedFile: File;

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
    this.getroledata();
  }
  getroledata() {
    this.http.getbrand().subscribe(data => {
      this.rolelist = data['data'];
      console.log(this.rolelist);
    })
  }
  getallbrands(event) {
    console.log(event.detail.value);
    var i;
    for (i = 0; i < this.rolelist.length; i++) {
      if (event.detail.value == this.rolelist[i]) {
        console.log(this.rolelist[i]);
      }
    }
  }
  onFileSelected(event) {
    let brandLogo = event.target.files[0];
    console.log("Selected", brandLogo.name);
    let formData = new FormData();
    formData.append('mediafile', brandLogo);
    // this.logodata = brandLogo.name;
    console.log(this.logodata)
    this.http.createlogo(formData).subscribe(result => {
      console.log(result);
   this.logodata = result['imageName'];
    });
  }
  onSubmit(){
    let obj = {
      catId: this.addcat.value.catId,
      catName: this.addcat.value.catName,
      catAliasName: this.addcat.value.catAliasName,
      catModel: this.addcat.value.catModel,
      catLogo: this.logodata,
      brand: this.addcat.value.brand
    }
this.http.createcat(obj).subscribe(data=>{
  console.log(data)
});
    
  }
  viewcategory(){
    this.roter.navigate(['/productcategory'])
  }
}
