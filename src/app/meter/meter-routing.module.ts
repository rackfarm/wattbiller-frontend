import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeterComponent } from './meter/meter.component';
import { MeterSubheaderComponent } from './meter-subheader/meter-subheader.component';

const routes: Routes = [
  {
    path: '',
    component: MeterComponent,
    data: {
      subheader: MeterSubheaderComponent
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterRoutingModule {
}
