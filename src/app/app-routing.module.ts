import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { PartyResignationCategoryComponent } from './modules/party-resignation-category/pages/party-resignation-category/party-resignation-category.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'party-resignation-category',
    component: PartyResignationCategoryComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/party-resignation-category/party-resignation-category.module').then(m => m.PartyResignationCategoryModule)
      }
    ]
  },
  {
    path: 'party-resignation-date',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/party-resignation-date/party-resignation-date.module').then(m => m.PartyResignationDateModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
