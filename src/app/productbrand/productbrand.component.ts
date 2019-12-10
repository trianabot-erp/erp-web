import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productbrand',
  templateUrl: './productbrand.component.html',
  styleUrls: ['./productbrand.component.css']
})
export class ProductbrandComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addbrand(){
    this.router.navigate(['/productaddbrand']);
  }
}
