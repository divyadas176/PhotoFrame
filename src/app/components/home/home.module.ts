import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
