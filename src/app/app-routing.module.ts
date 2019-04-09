import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsuranceBenefitsComponent } from './components/navbar/insurance-benefits/insurance-benefits.component';
import { IsuranceHealthComponent } from './components/navbar/isurance-health/isurance-health.component';
import { AgeGroupComponent } from './components/navbar/isurance-health/age-group/age-group.component';
import { PlanCodeComponent } from './components/navbar/isurance-health/plan-code/plan-code.component';
import { CompaniesComponent } from './components/navbar/companies/companies.component';
import { OurServicesComponent } from './components/navbar/our-services/our-services.component';
import { ContactComponent } from './components/navbar/contact/contact.component';
import { MessageComponent } from './components/navbar/contact/message/message.component';
import { GetQuoteComponent } from './components/navbar/get-quote/get-quote.component';
import { PlanDetailsComponent } from './components/navbar/plan-details/plan-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'insurance-benefits', component: InsuranceBenefitsComponent},
  {path: 'insurance-health', component: IsuranceHealthComponent},
  {path: 'age-group', component: AgeGroupComponent},
  {path: 'plan-code', component: PlanCodeComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'our-services', component: OurServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'message', component: MessageComponent},
  {path: 'get-quote', component: GetQuoteComponent},
  {path: 'plan-details', component: PlanDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
