import {Meter} from '../common/model.dto';
import {AppCrudService} from '../common/service/app-crud.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MeterService extends AppCrudService<Meter> {
  constructor(http: HttpClient) {
    super(http, '/api/meter');
  }

}
