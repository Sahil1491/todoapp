import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn: boolean = false; 

  showSignup: boolean = false;
  showLogin: boolean = false;
  signupUserName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private router: Router,private location: Location) {}

  submitSignUp() {
    if (
      this.signupUserName.trim() !== '' &&
      this.signupEmail.trim() !== '' &&
      this.signupPassword.trim() !== ''
    ) {
      const userData = {
        username: this.signupUserName,
        email: this.signupEmail,
        password: this.signupPassword,
      };

      let signupData = localStorage.getItem('signupData');
      if (!signupData) {
        signupData = '[]';
      }

      const signupList = JSON.parse(signupData);
      signupList.push(userData);
      localStorage.setItem('signupData', JSON.stringify(signupList));

      this.signupUserName = '';
      this.signupEmail = '';
      this.signupPassword = '';

      alert('Sign up successful! Data stored in local storage.');
    } else {
      alert('Please fill in all the signup fields.');
    }
  }

  submitLogin() {
    const signupData = JSON.parse(localStorage.getItem('signupData') || '[]');
   
    const matchingUser = signupData.find(
      (user: any) =>
        user.email === this.loginEmail && user.password === this.loginPassword
    );
  
    if (matchingUser) {
      console.log('Login successful!');
     
      // Store the logged-in user's username in local storage
      localStorage.setItem('loggedInUser', matchingUser.username);
     
      // Set isLoggedIn to true to enable the navbar buttons
      
      console.log('isLoggedIn set to true:', this.isLoggedIn); // Add this line for debugging
     
      this.isLoggedIn = true;
      
      this.router.navigate(['/add-task']);
      window.location.reload();
    
     
      this.loginEmail = '';
      this.loginPassword = '';
    } else {
      alert('Invalid login credentials. Please try again.');
    }
  }
  
}
