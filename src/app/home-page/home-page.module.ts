import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    HomePageComponent,
    AddAssetsComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    HomePageComponent
  ],
})
export class HomePageModule { }
