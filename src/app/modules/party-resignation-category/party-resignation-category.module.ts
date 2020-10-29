import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyResignationCategoryRoutingModule } from './party-resignation-category-routing.module';
import { PartyResignationCategoryComponent } from './pages/party-resignation-category/party-resignation-category.component';



@NgModule({
  declarations: [PartyResignationCategoryComponent],
  imports: [
    CommonModule,
    PartyResignationCategoryRoutingModule
  ]
})
export class PartyResignationCategoryModule { }
