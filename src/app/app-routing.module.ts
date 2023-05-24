import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register-login/register/register.component';

const routes: Routes = [
  { 
   path: 'customers', 
   loadChildren: () => import('./register-login/register-login.module').then(m => m.RegisterLoginModule)
  },
  { path: 'orders', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {path:'',redirectTo: 'register',pathMatch: 'full'},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
