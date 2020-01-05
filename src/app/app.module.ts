import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MeterComponent} from './meter/meter.component';
import {BillingComponent} from './billing/billing.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MeterService} from './meter/meter.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
            declarations: [
              AppComponent,
              MeterComponent,
              BillingComponent
            ],
            imports: [
              BrowserModule,
              NoopAnimationsModule,
              MatToolbarModule,
              RouterModule,
              MatIconModule,
              MatButtonModule,
              AppRoutingModule,
              HttpClientModule
            ],
            providers: [MeterService],
            bootstrap: [AppComponent],
          })
export class AppModule {
}
