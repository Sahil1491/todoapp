import { Component  } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
[x: string]: any;
  data:any;
  
  ngOnInit():void{
    this.storedata();
  }
  storedata(){
    this.data=localStorage.getItem('tasks');
   
  }

}
