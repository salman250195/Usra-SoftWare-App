import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';

const routes: Routes = [
  // { path: '', component: SharedComponent }
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
