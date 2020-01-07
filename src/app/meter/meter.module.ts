import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterRoutingModule } from './meter-routing.module';
import { MeterComponent } from './meter/meter.component';
import { MeterSubheaderComponent } from './meter-subheader/meter-subheader.component';
import { SubheaderComponentFactoryResolver } from '../common/service/subheader-component-factory-resolver';


@NgModule({
  declarations: [
    MeterComponent,
    MeterSubheaderComponent
  ],
  imports: [
    CommonModule,
    MeterRoutingModule
  ],
  entryComponents: [
    MeterSubheaderComponent
  ]
})
export class MeterModule {
  constructor(localResolver: ComponentFactoryResolver,
              subheaderResolver: SubheaderComponentFactoryResolver) {
    subheaderResolver.register(localResolver);
  }
}
