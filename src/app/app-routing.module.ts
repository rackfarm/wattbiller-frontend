import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'billing'
      },
      {
        path: 'billing',
        loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule)
      },
      {
        path: 'meter',
        loadChildren: () => import('./meter/meter.module').then(m => m.MeterModule)
      }
    ])
  ]
})
export class AppRoutingModule {
}
