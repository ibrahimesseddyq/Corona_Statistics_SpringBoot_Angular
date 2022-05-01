import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CompteDisableComponent } from './components/compte-disable/compte-disable.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { ListemployeComponent } from './components/listemploye/listemploye.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { DashboardemployerComponent } from './components/dashboardemployer/dashboardemployer.component';


const routes: Routes = [
  { path: '' , component:LoginPageComponent  },
  { path: 'disable', component:CompteDisableComponent },
  { path: 'dashboardadmin', component:DashboardadminComponent },
  { path: 'dashboardemployer', component:DashboardemployerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
