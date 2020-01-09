import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserBill } from '../../model/user-bill.model';
import { UserBillService } from '../../service/user-bill.service';

@Component({
  selector: 'wat-user-bill-list-page',
  templateUrl: './user-bill-list.page.html',
  styleUrls: ['./user-bill-list.page.scss']
})
export class UserBillListPage implements OnInit {
  bills$: Observable<Array<UserBill>>;

  constructor(private userBillService: UserBillService) {
  }

  ngOnInit() {
    this.bills$ = this.userBillService.readAll();
  }

}
