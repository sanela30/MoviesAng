import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../module/shared.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SearchComponent],
  
  exports: [
    SearchComponent
]

})
export class SearchModuleModule { }
