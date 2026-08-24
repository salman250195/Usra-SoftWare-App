import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/pages/services/services.component';
import { WebDevelopmentComponent } from './services/pages/web-development/web-development.component';
import { UiUxComponent } from './services/pages/ui-ux/ui-ux.component';
import { MobileAppsComponent } from './services/pages/mobile-apps/mobile-apps.component';
import { DigitalMarketingComponent } from './services/pages/digital-marketing/digital-marketing.component';
import { DomainHostingComponent } from './services/pages/domain-hosting/domain-hosting.component';
import { CybersecurityComponent } from './services/pages/cybersecurity/cybersecurity.component';
import { FreelancingComponent } from './services/pages/freelancing/freelancing.component';
import { SoftwareServicesComponent } from './services/pages/software-services/software-services.component';
import { BrandingComponent } from './services/pages/branding/branding.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    WebDevelopmentComponent,
    UiUxComponent,
    MobileAppsComponent,
    DigitalMarketingComponent,
    DomainHostingComponent,
    CybersecurityComponent,
    FreelancingComponent,
    SoftwareServicesComponent,
    BrandingComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }