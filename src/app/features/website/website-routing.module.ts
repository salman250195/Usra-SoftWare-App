import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'services/webdev', component: WebDevelopmentComponent },
  { path: 'services/ui-ux', component: UiUxComponent },
  { path: 'services/mobile-apps', component: MobileAppsComponent },
  { path: 'services/digital-marketing', component: DigitalMarketingComponent },
  { path: 'services/domain-hosting', component: DomainHostingComponent },
  { path: 'services/cybersecurity', component: CybersecurityComponent },
  { path: 'services/freelancing', component: FreelancingComponent },
  { path: 'services/software-services', component: SoftwareServicesComponent },
  { path: 'services/branding', component: BrandingComponent },

  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}