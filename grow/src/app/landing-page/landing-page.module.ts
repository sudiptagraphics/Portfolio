import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingIndexComponent } from './landing-index/landing-index.component';
import { HeaderModule } from '../header/header.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    LandingIndexComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HeaderModule,
    CarouselModule,
    FooterModule,
  ]
})
export class LandingPageModule { }
