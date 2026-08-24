import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    loadChildren: () =>
      import('./features/website/website.module').then(
        m => m.WebsiteModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
   },)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
