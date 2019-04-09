import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { InsuranceBenefitsComponent } from './components/navbar/insurance-benefits/insurance-benefits.component';
import { IsuranceHealthComponent } from './components/navbar/isurance-health/isurance-health.component';
import { AgeGroupComponent } from './components/navbar/isurance-health/age-group/age-group.component';
import { PlanCodeComponent } from './components/navbar/isurance-health/plan-code/plan-code.component';
import { CompaniesComponent } from './components/navbar/companies/companies.component';
import { OurServicesComponent } from './components/navbar/our-services/our-services.component';
import { ContactComponent } from './components/navbar/contact/contact.component';
import { MessageComponent } from './components/navbar/contact/message/message.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { GetQuoteComponent } from './components/navbar/get-quote/get-quote.component';
import { PlanDetailsComponent } from './components/navbar/plan-details/plan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    InsuranceBenefitsComponent,
    IsuranceHealthComponent,
    AgeGroupComponent,
    PlanCodeComponent,
    CompaniesComponent,
    OurServicesComponent,
    ContactComponent,
    MessageComponent,
    GetQuoteComponent,
    PlanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFlashMessagesModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
