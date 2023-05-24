import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { RegisterLoginModule } from '../register-login/register-login.module';
import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { HomeComponent } from './home/home.component';
import { AssetListComponent } from './asset-list/asset-list.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AddAssetsComponent,
    HomepageNavbarComponent,
    HomeComponent,
    AssetListComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    RegisterLoginModule
  ],
  exports: [
    HomePageComponent
  ],
})
export class HomePageModule { }
