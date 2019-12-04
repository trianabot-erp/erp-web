import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavone',
  templateUrl: './sidenavone.component.html',
  styleUrls: ['./sidenavone.component.css']
})
export class SidenavoneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  overview(){

this.router.navigate(['/crm']);
  }
  raiseticket(){
    this.router.navigate(['/raiseticket']);
  }
  aspcrm(){
    this.router.navigate(['/aspcrm']);
  }
  asptechnician(){
    this.router.navigate(['/asptechnician']);
  }
}
