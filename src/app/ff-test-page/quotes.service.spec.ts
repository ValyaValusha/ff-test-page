import {TestBed, inject, async} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule, HttpCacheService } from '@app/core';
import { QuotesService } from './quotes.service';

describe('QuotesService', () => {
  let quotesService: QuotesService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpCacheService,
        QuotesService
      ]
    });
  }));

  beforeEach(inject([
    HttpCacheService,
    QuotesService,
    HttpTestingController
  ], (htttpCacheService: HttpCacheService,
      _quotesService: QuotesService,
      _httpMock: HttpTestingController) => {

    quotesService = _quotesService;
    httpMock = _httpMock;

    htttpCacheService.cleanCache();
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('getJokes', () => {
    it('should return an array Chuck Norris jokes', () => {
      // Arrange
      const mockJokes = { result: [{}, {}] };

      // Act
      const getJokesSubscription = quotesService.getJokes({ category: 'toto' });

      // Assert
      getJokesSubscription.subscribe((jokes: any) => {
        expect(jokes).toEqual(mockJokes.result);
      });
      httpMock.expectOne({}).flush(mockJokes);
    });

    it('should return a string in case of error', () => {
      // Act
      const getJokesSubscription = quotesService.getJokes({ category: 'toto' });

      // Assert
      getJokesSubscription.subscribe((joke: any) => {
        expect(typeof joke).toEqual('string');
        expect(joke).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });
});

