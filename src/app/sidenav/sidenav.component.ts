import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  skyzenproducts(){
    this.router.navigate(['/skyzenproducts']);
  }
  asp(){
    this.router.navigate(['/asp']);
  }
  category(){
    this.router.navigate(['/category']);
  }
  skyzenparts(){
    this.router.navigate(['/skyzenparts'])
  }
}
