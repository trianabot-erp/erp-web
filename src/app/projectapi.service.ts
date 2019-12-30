import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectapiService {
  get(arg0: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
 
  login(data){
    return this.http.post('http://localhost:4040/users/login',data);
  }
  roledata(){
    return this.http.get('http://localhost:4040/role/getallroles');
  }
  postuser(data){
    return this.http.post('http://localhost:4040/users/createuser',data);
  }
  createRole(data){
    return this.http.post('http://localhost:4040/role/createrole',data);
  }
  newuser(data){
    return this.http.post('http://localhost:4040/users/generatepass',data);
  }
  addcategorydata(data){
    return this.http.post('http://localhost:3000/appi/addcategorydata',data);
  }
  addgetcategory(){
    return this.http.get('http://localhost:3000/appi/addcatelist');
  }
  createBrand(data){
    return this.http.post('http://localhost:4040/brands/createbrand',data);
  }
  createlogo(data){
    return this.http.post('http://localhost:4040/erp/uploads/brandlogo',data);
  }
  getbrand(){
    return this.http.get('http://localhost:4040/brands/getallbrands');
  }
  createcat(data){
    return this.http.post('http://localhost:4040/categoryes/createcategory',data);
  }
  getallcategoryes(){
    return this.http.get('http://localhost:4040/categoryes/getallcategoryes');
  }
  }

