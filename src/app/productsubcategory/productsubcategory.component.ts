import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsubcategory',
  templateUrl: './productsubcategory.component.html',
  styleUrls: ['./productsubcategory.component.css']
})
export class ProductsubcategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addsubcategory(){
    this.router.navigate(['/productaddsubcategory'])
  }
}
