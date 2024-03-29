import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{ path: '',redirectTo:'home', pathMatch:'full'}, {path:'home',component: HomeComponent} ,
{ path: 'add-task', component: AddtaskComponent },
{ path: 'view-list', component: ViewlistComponent},
{ path: 'dashboard', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
