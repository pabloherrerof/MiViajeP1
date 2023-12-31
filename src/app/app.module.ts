import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DaysLayoutComponent } from './components/days-layout/days-layout.component';
import { DaysDetailComponent } from './components/days-detail/days-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
import { FiltersComponent } from './components/filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DaysLayoutComponent,
    DaysDetailComponent,
    PlayerComponent,
    FiltersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
