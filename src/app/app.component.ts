import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoapp';
  isLoggedIn: boolean = false; 
  constructor(private router: Router,private location: Location) {}


  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      
      // If a user is logged in, set isLoggedIn to true
      this.isLoggedIn = true;
   

    }
    
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
