import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectapiService } from '../projectapi.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
 
  categoryform: FormGroup;
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder,private http:ProjectapiService) { }

  ngOnInit() {
    this.categoryform = this.formBuilder.group({
      
      brandname: ['', Validators.required],
      categoryname: ['', Validators.required],
      categoryaliasname: ['', Validators.required]
    });
  }
  onSubmit() {
    
    console.log("StudentData", this.categoryform.value);
    this.submitted = true;
    let obj = {
      brandname:this.categoryform.value.brandname,
      categoryname:this.categoryform.value.categoryname,   
      categoryaliasname:this.categoryform.value.categoryaliasname
      
    }
    this.http.addcategorydata(obj).subscribe(data =>{
    console.log("response coming",data);
    
    if(data['msg']==' data saved successfully'){
       alert("registered successfully!");
     
    }
    else{
       alert(data['msg']);
      
    }
    
    this.categoryform.reset();
    })
    
    
    
    if (this.categoryform.invalid) {
        return;
    }

}

  viewcategories(){
    this.router.navigate(['/category']);
  }

}
