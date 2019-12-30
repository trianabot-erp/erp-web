import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectapiService } from './../projectapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-productaddbrand',
  templateUrl: './productaddbrand.component.html',
  styleUrls: ['./productaddbrand.component.css']
})
export class ProductaddbrandComponent implements OnInit {
  addbrand: FormGroup;
  selectedFile: File;
  brandLogo: File;
  logodata: any;
  brandLogoName: string;
  constructor(private formbuilder: FormBuilder, private router: Router, private http: ProjectapiService) {
  }
  ngOnInit() {
    this.addbrand = this.formbuilder.group({
      brandId: [''],
      brandName: [''],
      brandAliasName: [''],
      brandLogo: [''],
      company: ['']

    });

  }
  onFileSelected(event) {
    let brandLogo = event.target.files[0];
    console.log("Selected", brandLogo.name);
    let formData = new FormData();
    formData.append('mediafile', brandLogo);
    this.logodata = brandLogo.name;
    console.log(this.logodata)
    this.http.createlogo(formData).subscribe(result => {
      console.log(result);
   this.logodata = result['imageName'];
    });
  }
  onSubmit() {

    let obj = {
      brandId: this.addbrand.value.brandId,
      brandName: this.addbrand.value.brandName,
      brandAliasName: this.addbrand.value.brandAliasName,
      brandLogo: this.logodata,
      company: this.addbrand.value.company
    }
    console.log("obj", obj);
    this.http.createBrand(obj).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error);
    });

  }
  view() {
    this.router.navigate(['/productbrand']);
  }
}
