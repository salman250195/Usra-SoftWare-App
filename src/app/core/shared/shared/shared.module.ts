import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebDevelopmentComponent } from 'src/app/pages/web-development/web-development.component';
import { UiUxComponent } from 'src/app/pages/ui-ux/ui-ux.component';
import { CybersecruityComponent } from 'src/app/pages/cybersecruity/cybersecruity.component';
import { DomainHostingComponent } from 'src/app/pages/domain-hosting/domain-hosting.component';
import { DigitalMarketingComponent } from 'src/app/pages/digital-marketing/digital-marketing.component';
import { MobileAppsComponent } from 'src/app/pages/mobile-apps/mobile-apps.component';
import { FreelancingComponent } from 'src/app/pages/freelancing/freelancing.component';
import { SoftwareServicesComponent } from 'src/app/pages/software-services/software-services.component';
import { BrandingComponent } from 'src/app/pages/branding/branding.component';


@NgModule({
  declarations: [
    SharedComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    WebDevelopmentComponent,
    UiUxComponent,
    CybersecruityComponent,
    DomainHostingComponent,
    DigitalMarketingComponent,
    MobileAppsComponent,
    FreelancingComponent,
    SoftwareServicesComponent,
    BrandingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
