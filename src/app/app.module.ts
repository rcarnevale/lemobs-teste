import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from './shared/shared.module';
import { TableauModule } from 'ngx-tableau';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    SharedModule,
    TableauModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
