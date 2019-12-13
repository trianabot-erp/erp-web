import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectapiService } from '../projectapi.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
  addroleform: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: ProjectapiService) { }

  ngOnInit() {
    this.addroleform = this.formBuilder.group({
      roleId: ['', Validators.required],
      roleName: ['', Validators.required],
      roleDesc: ['', [Validators.required]],
    
    });

  }
  onSubmit(){
console.log(this.addroleform.value);
this.http.createRole(this.addroleform.value).subscribe(data=>{
  console.log("roles created successfully",data );
})
  }
}
