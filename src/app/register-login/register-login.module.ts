import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterLoginRoutingModule } from './register-login-routing.module';
import { RegisterLoginComponent } from './register-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { FooterModule } from '../footer/footer.module';
@NgModule({
  declarations: [
    RegisterLoginComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    RegisterLoginRoutingModule,
    // FooterModule
  ],
  exports: [
    RegisterLoginComponent
  ],
})
export class RegisterLoginModule { }
