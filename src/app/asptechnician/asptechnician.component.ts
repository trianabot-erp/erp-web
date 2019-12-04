import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asptechnician',
  templateUrl: './asptechnician.component.html',
  styleUrls: ['./asptechnician.component.css']
})
export class AsptechnicianComponent implements OnInit {
  searchText;

  heroes = [
  { SNo: 1, TechnicianName: 'Mr. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 2, TechnicianName: ' Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 3, TechnicianName: 'MNice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 4, TechnicianName: 'r. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 5, TechnicianName: 'Mr. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 6, TechnicianName: ' Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 7, TechnicianName: 'MNice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 8, TechnicianName: 'r. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 9, TechnicianName: 'Mr. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 10, TechnicianName: ' Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 11, TechnicianName: 'MNice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 12, TechnicianName: 'r. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 13, TechnicianName: 'Mr. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 14, TechnicianName: ' Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 15, TechnicianName: 'MNice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 16, TechnicianName: 'r. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 17, TechnicianName: 'Mr. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 18, TechnicianName: ' Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 19, TechnicianName: 'MNice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'},
  { SNo: 20, TechnicianName: 'r. Nice', ASP: 'India' , Contact:'76567564564',Area:'madhapur'}
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
