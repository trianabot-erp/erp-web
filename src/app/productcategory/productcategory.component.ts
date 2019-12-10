import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addcategory(){
    this.router.navigate(['/productaddcategory'])
  }
}
