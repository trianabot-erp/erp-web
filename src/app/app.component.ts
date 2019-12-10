import { Component } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  headershow:boolean = true;
  show: boolean= true;
  sideshow: boolean= true;
  constructor(private router :Router) {
     
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login'||event['url']=="/"||event['url']=='/pagenotfound'||event['url']=='/adduser') {
          this.headershow = false;
        } else {
          this.headershow = true;
        }
      }
    });
    
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url']=='/login'||event['url']=='/'||event['url']=='/dashboard'||event['url']=='/pagenotfound'||event['url']=='/adduser') {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    });
    

    
  }
}
