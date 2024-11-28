import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WomensclothesComponent } from './womensclothes/womensclothes.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


export const routes: Routes = [
  { path: '', component: FrontpageComponent }, // Default route
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }, // Sign-in/Sign-up route
  { path: 'dashboard', component: DashboardComponent }, // Home route after login
  { path: 'womensclothes', component: WomensclothesComponent }, // Home route after login  
  { path: '**', redirectTo: 'signin' }, // Wildcard route (fallback)  
];
