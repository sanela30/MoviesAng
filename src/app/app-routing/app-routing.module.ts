import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../component/movies/movies.component';
import { SearchPageComponent } from '../component/search-page/search-page.component';

const appRoutes: Routes = [
  { path: '', 
    redirectTo: 'movies',
    pathMatch: 'full'
},
{
  path:'movies',
  component: MoviesComponent 
},
{
  path:'search/:term',
  component:SearchPageComponent
 
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
