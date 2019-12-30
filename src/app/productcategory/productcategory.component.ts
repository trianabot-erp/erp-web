import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectapiService } from '../projectapi.service';


@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {
category:[];
  constructor(private router:Router,private http:ProjectapiService) { }

  ngOnInit() {
    this.http.getallcategoryes().subscribe(data => {
      console.log(data);
      // this.brand['']=data
      this.category=data['data'];
      console.log(this.category)

    }, error => {
      console.log(error);
    })
  }
  addcategory(){
    this.router.navigate(['/productaddcategory'])
  }
}
