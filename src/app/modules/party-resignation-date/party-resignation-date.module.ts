import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyResignationDateRoutingModule } from './party-resignation-date-routing.module';
import { PartyResignationDateComponent } from './pages/party-resignation-date/party-resignation-date.component';
import { TableauModule } from 'ngx-tableau';



@NgModule({
  declarations: [PartyResignationDateComponent],
  imports: [
    CommonModule,
    PartyResignationDateRoutingModule,
    TableauModule
  ]
})
export class PartyResignationDateModule { }
