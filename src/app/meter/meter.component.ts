import { Component, OnInit } from '@angular/core';
import {MeterService} from './meter.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit {

  constructor(private metersService: MeterService) { }

  ngOnInit() {
  }

}
