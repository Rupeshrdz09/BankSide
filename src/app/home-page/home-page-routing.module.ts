import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add-assets',component:AddAssetsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
