import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { UserBillListPage } from './pages/user-bill-list/user-bill-list.page';
import { UserBillListComponent } from './components/user-bill-list/user-bill-list.component';
import { UserBillService } from './service/user-bill.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    UserBillListPage,
    UserBillListComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    UserBillService
  ]
})
export class BillingModule { }
