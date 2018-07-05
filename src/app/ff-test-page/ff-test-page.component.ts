import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {QuotesService} from '@app/ff-test-page/quotes.service';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent implements OnInit {

  jokes: string;
  isLoading: boolean;
  category: string;
  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
  }


  findJokes() {
    this.isLoading = true;
    this.quotesService.getJokes({ category: this.category })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((jokes: any) => { this.jokes = jokes; });
  }
}
