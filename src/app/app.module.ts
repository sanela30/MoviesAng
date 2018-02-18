import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MoviesComponent } from './component/movies/movies.component';
import { SharedModule } from './shared/module/shared.module';
//import { MovieRowComponent } from './shared/movie-row/movie-row.component';
import { SearchModuleModule } from './shared/search-module/search-module.module';
//import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './component/search-page/search-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    MoviesComponent,
    //MovieRowComponent,
    SearchPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModuleModule,
    //FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
