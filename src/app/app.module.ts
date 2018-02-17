import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MoviesComponent } from './component/movies/movies.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
