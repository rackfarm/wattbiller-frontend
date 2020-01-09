import { Injectable } from '@angular/core';
import { AppCrudService } from '../../common/service/app-crud.service';
import { HttpClient } from '@angular/common/http';
import { UserBill } from '../model/user-bill.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserBillService extends AppCrudService<UserBill> {

  constructor(http: HttpClient) {
    super(http, '/api/userBill');
  }


  readAll(): Observable<UserBill[]> {
    return of([
      {
        id: 1,
        periodName: 'Januar 2020',
        username: 'Mario',
        amount: 100,
        entries: [
          {
            cost: 10,
            meterName: 'Server 1',
            userBillId: 1
          },
          {
            cost: 20,
            meterName: 'Server 3',
            userBillId: 1
          },
          {
            cost: 70,
            meterName: 'Server 3',
            userBillId: 1
          }
        ]
      },
      {
        id: 2,
        periodName: 'Dezember 2019',
        username: 'Mario',
        amount: 10,
        entries: [
          {
            cost: 5,
            meterName: 'Server 1',
            userBillId: 2
          },
          {
            cost: 5,
            meterName: 'Server 2',
            userBillId: 2
          }
        ]
      }
    ]);
  }
}
