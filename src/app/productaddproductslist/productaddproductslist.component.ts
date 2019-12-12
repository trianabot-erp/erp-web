import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productaddproductslist',
  templateUrl: './productaddproductslist.component.html',
  styleUrls: ['./productaddproductslist.component.css']
})
export class ProductaddproductslistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  viewproductslist(){
    this.router.navigate(['/productslist'])
  }
}
