import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: '',
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
