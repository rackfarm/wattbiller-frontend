import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MeterComponent} from './meter/meter.component';
import {BillingComponent} from './billing/billing.component';

@NgModule({
            imports: [
              RouterModule.forRoot([
                {
                  path: '',
                  redirectTo: 'meter',
                  pathMatch: 'full'
                },
                {
                  path: 'meter',
                  component: MeterComponent
                },
                {
                  path: 'billing',
                  component: BillingComponent
                }
              ])
            ]
          })
export class AppRoutingModule {}
