import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from "./components/card/card.component";
import { HeroImagePipe } from './pipes/heroes/pipes/heroImage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    CardComponent,
    DialogComponent,
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    HeroImagePipe,
    NewPageComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    
]
})
export class HeroesModule { }
