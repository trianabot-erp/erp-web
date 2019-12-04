import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectapiService {

  constructor(private http:HttpClient) { }
  postform(data){
    return this.http.post('http://localhost:3000/appi/projectlogindata',data);
  }
  getdata(){
    return this.http.get('http://localhost:3000/appi/projectgetdata');
  }

  login(data){
    return this.http.post('http://localhost:3000/appi/logindata',data);
  }
  addcategorydata(data){
    return this.http.post('http://localhost:3000/appi/addcategorydata',data);
  }
  addgetcategory(){
    return this.http.get('http://localhost:3000/appi/addcatelist');
  }
  }

