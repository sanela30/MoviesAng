import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../module/shared.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [SearchComponent,
    
   
  ],
  
  exports: [
    SearchComponent,
    

]

})
export class SearchModuleModule { }
