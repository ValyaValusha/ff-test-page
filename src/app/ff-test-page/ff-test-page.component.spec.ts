import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfTestPageComponent } from './ff-test-page.component';
import {CoreModule} from '@app/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SharedModule} from '@app/shared';
import {QuotesService} from '@app/ff-test-page/quotes.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('FfTestPageComponent', () => {
  let component: FfTestPageComponent;
  let fixture: ComponentFixture<FfTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        HttpClientTestingModule,
        BrowserModule,
        FormsModule,
      ],
      declarations: [ FfTestPageComponent ],
      providers: [QuotesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
