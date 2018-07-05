import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FfTestPageRoutingModule } from './ff-test-page-routing.module';
import { FfTestPageComponent } from './ff-test-page.component';
import {QuotesService} from '@app/ff-test-page/quotes.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    CoreModule,
    SharedModule,
    FfTestPageRoutingModule
  ],
  declarations: [
    FfTestPageComponent
  ],
  providers: [
    QuotesService
  ]
})
export class FfTestPageModule { }
