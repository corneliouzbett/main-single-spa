import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientSearchService } from './app.service';
import { PatientResourceService } from './services/patient-resource.service';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/search'},
    PatientSearchService,
    PatientResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
