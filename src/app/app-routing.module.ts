import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const route: Routes = [
	{
		path:'', component:HomeComponent
	},
	{
		path:'about', component:AboutComponent
	}

	];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
