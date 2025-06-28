import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { WebDevelopmentComponent } from 'src/app/pages/web-development/web-development.component';
import { UiUxComponent } from 'src/app/pages/ui-ux/ui-ux.component';
import { MobileAppsComponent } from 'src/app/pages/mobile-apps/mobile-apps.component';
import { DigitalMarketingComponent } from 'src/app/pages/digital-marketing/digital-marketing.component';
import { DomainHostingComponent } from 'src/app/pages/domain-hosting/domain-hosting.component';
import { CybersecruityComponent } from 'src/app/pages/cybersecruity/cybersecruity.component';
import { FreelancingComponent } from 'src/app/pages/freelancing/freelancing.component';
import { SoftwareServicesComponent } from 'src/app/pages/software-services/software-services.component';
import { BrandingComponent } from 'src/app/pages/branding/branding.component';

const routes: Routes = [
  // { path: '', component: SharedComponent }
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'services/webdev', component: WebDevelopmentComponent},
  { path: 'services/ui-ux', component: UiUxComponent },
  { path: 'services/mobile-apps', component: MobileAppsComponent },
  { path: 'services/digital-marketing', component: DigitalMarketingComponent },
  { path: 'services/domain-hosting', component: DomainHostingComponent },
  { path: 'services/cybersecurity', component: CybersecruityComponent },
  { path: 'services/freelancing', component: FreelancingComponent },
  { path: 'services/software-services', component: SoftwareServicesComponent },
  { path: 'services/branding', component: BrandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
