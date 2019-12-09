import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skyzenparts',
  templateUrl: './skyzenparts.component.html',
  styleUrls: ['./skyzenparts.component.css']
})
export class SkyzenpartsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addparts(){
    this.router.navigate(['/addpartsskyzen']);
   }
}
