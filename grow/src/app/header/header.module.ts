import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { IndexHeaderComponent } from './index-header/index-header.component';


@NgModule({
  declarations: [
    IndexHeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,

  ],
  exports: [
    IndexHeaderComponent
  ]
})
export class HeaderModule { }
