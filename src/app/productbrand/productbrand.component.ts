import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectapiService } from '../projectapi.service';


@Component({
  selector: 'app-productbrand',
  templateUrl: './productbrand.component.html',
  styleUrls: ['./productbrand.component.css']
})
export class ProductbrandComponent implements OnInit {
brand:[];
  constructor(private router: Router, private http: ProjectapiService) { }

  ngOnInit() {
    this.http.getbrand().subscribe(data => {
      console.log(data);
      // this.brand['']=data
      this.brand=data['data'];
      console.log(this.brand)

    }, error => {
      console.log(error);
    })
  }

  addbrand() {
    this.router.navigate(['/productaddbrand']);
  }
}
