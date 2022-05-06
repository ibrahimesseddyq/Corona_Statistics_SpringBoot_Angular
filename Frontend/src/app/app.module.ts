import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CompteDisableComponent } from './components/compte-disable/compte-disable.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { ListemployeComponent } from './components/listemploye/listemploye.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardemployerComponent } from './components/dashboardemployer/dashboardemployer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CompteDisableComponent,
    DashboardadminComponent,
    NavbarComponent,
    AddemployeComponent,
    ListemployeComponent,
    ProfileAdminComponent,
    DashboardemployerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '' , component:LoginPageComponent  },
      { path: 'disable', component:CompteDisableComponent },
      { path: 'dashboardadmin', component:DashboardadminComponent },
      { path: 'dashboardemployer', component:DashboardemployerComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// .forRoot([
//   {path: 'login', component: LoginPageComponent},
//   {path: 'compteDisable', component:CompteDisableComponent},
// ]),
// ],
