import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerone',
  templateUrl: './headerone.component.html',
  styleUrls: ['./headerone.component.css']
})
export class HeaderoneComponent implements OnInit {
  tabIndex: any;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
crm(){
  this.router.navigate(['/crm']);
}
Product(){
  this.router.navigate(['/products'])
}
  
}
