import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyResignationDateRoutingModule } from './party-resignation-date-routing.module';
import { IndexComponent } from './pages/index/index.component';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    PartyResignationDateRoutingModule
  ]
})
export class PartyResignationDateModule { }
