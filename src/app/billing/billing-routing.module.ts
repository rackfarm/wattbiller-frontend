import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserBillListPage } from './pages/user-bill-list/user-bill-list.page';

const routes: Routes = [
  {
    path: '',
    component: UserBillListPage,
    data: {
      subheader: 'Billing'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BillingRoutingModule {
}
