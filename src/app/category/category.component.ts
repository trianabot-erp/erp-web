import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectapiService } from '../projectapi.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  searchText;
  onedata:any;

  
  constructor(private router:Router,private http:ProjectapiService) { }
  
  ngOnInit() {
    this.addregisterdata();
  }
  addcategory(){
  this.router.navigate(['/addcategory']);
  }
  addregisterdata(){
    this.http.addgetcategory().subscribe(data=>{
     this.onedata = data;
     console.log("onedata",this.onedata,data);
    })
  }

}
