import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productaddsubcategory',
  templateUrl: './productaddsubcategory.component.html',
  styleUrls: ['./productaddsubcategory.component.css']
})
export class ProductaddsubcategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  viewsubcategory(){
    this.router.navigate(['/productsubcategory'])
  }
}
