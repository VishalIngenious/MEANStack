import { JsonService } from './services/app.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'; // mainly for banana in box two way data binding
import { HttpModule } from '@angular/http'; // along with import we are registering http service with angulars injector
// this auto work is done by HttpModule for us
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app-component/app.component';
import { DashboardComponent } from './dashboard-component/dashboardComponent';
import { LoginComponent } from './LoginComponent';
import { HomeComponent } from './home-component/homeComponent';
import { RegistrationComponent } from './registration-component/RegistrationComponent';
import { UserDashboardComponent } from './user-dashboard-component/UserDashboardComponent';
import { ChildComponentComponent } from  './child-component/child-component.component';

const routeConfig: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent /* , canActivate: [JsonService] */},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'userDashboard', component: UserDashboardComponent},
];

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule,
                  ReactiveFormsModule,
                  RouterModule.forRoot(routeConfig)
                ], // to available this module in our application
  declarations: [ AppComponent, DashboardComponent, LoginComponent, HomeComponent, RegistrationComponent, 
                  UserDashboardComponent,ChildComponentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
