import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productaddbrand',
  templateUrl: './productaddbrand.component.html',
  styleUrls: ['./productaddbrand.component.css']
})
export class ProductaddbrandComponent implements OnInit {
  addbrand: FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { 
  this.addbrand = this.fb.group({
    brandname:['', Validators.required],
    fliename:['', Validators.required]
  });
}
  ngOnInit() {
  }
  view(){
    this.router.navigate(['/productbrand']);
  }
  }
