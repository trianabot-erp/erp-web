import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aspcrm',
  templateUrl: './aspcrm.component.html',
  styleUrls: ['./aspcrm.component.css']
})
export class AspcrmComponent implements OnInit {

  heroes = [
    { SNo: 1, ASPName: 'Mr. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur', Action:''},
    { SNo: 2, ASPName: ' Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 3, ASPName: 'MNice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 4, ASPName: 'r. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 5, ASPName: 'Mr. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 6, ASPName: ' Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 7, ASPName: 'MNice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 8, ASPName: 'r. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 9, ASPName: 'Mr. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 10, ASPName: ' Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 11, ASPName: 'MNice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 12, ASPName: 'r. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 13, ASPName: 'Mr. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 14, ASPName: ' Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 15, ASPName: 'MNice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 16, ASPName: 'r. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 17, ASPName: 'Mr. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 18, ASPName: ' Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 19, ASPName: 'MNice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''},
    { SNo: 20, ASPName: 'r. Nice', ContactPerson: 'India' , PinCode:'India',ContactNumber:'76567564564',Email:'aefd@gmail.com',Area:'madhapur',Action:''}
    ];
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
