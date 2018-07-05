import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  joke: (c: JokeContext) => `/jokes/search?query=${c.category}`
};

export interface JokeContext {
  category: string;
}

@Injectable()
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  getJokes(context: JokeContext): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes.joke(context))
      .pipe(
        map((body: any) => body.result),
        catchError(() => of('Error, could not load jokes :-('))
      );
  }
}
