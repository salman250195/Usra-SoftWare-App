import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FloatingContactComponent  } from './layout/floating-contact/floating-contact.component'


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FloatingContactComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FloatingContactComponent
  ]
})
export class CoreModule {
  constructor() {
    console.log('Core Module loaded.');
  }
 }
