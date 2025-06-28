import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
// import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { MobileAppsComponent } from './pages/mobile-apps/mobile-apps.component';
import { UiUxComponent } from './pages/ui-ux/ui-ux.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { DomainHostingComponent } from './pages/domain-hosting/domain-hosting.component';
import { CybersecruityComponent } from './pages/cybersecruity/cybersecruity.component';
import { FloatingContactComponent } from './pages/floating-contact/floating-contact.component';
import { SoftwareServicesComponent } from './pages/software-services/software-services.component';
import { FreelancingComponent } from './pages/freelancing/freelancing.component';
import { BrandingComponent } from './pages/branding/branding.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingContactComponent,
    // BrandingComponent,
    // FreelancingComponent,
    // HomeComponent,
    // AboutComponent,
    // ServicesComponent,
    // ContactComponent,
    // WebDevelopmentComponent,
    // MobileAppsComponent,
    // UiUxComponent,
    // DigitalMarketingComponent,
    // DomainHostingComponent,
    // CybersecruityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module loaded.');
  }
 }
