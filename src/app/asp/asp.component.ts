import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asp',
  templateUrl: './asp.component.html',
  styleUrls: ['./asp.component.css']
})
export class AspComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
addasp(){
  this.router.navigate(['/addasp']);
}
}
