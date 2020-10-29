import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { PartyResignationCategoryRoutingModule } from './party-resignation-category-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    PartyResignationCategoryRoutingModule
  ]
})
export class PartyResignationCategoryModule { }
