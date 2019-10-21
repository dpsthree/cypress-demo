import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ScoreEntry } from '@cypress-demo/api-interfaces';

import { AppService } from '../app.service';

@Component({
  selector: 'cypress-demo-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  scores: Observable<ScoreEntry[]>;
  err: any;

  constructor(appService: AppService) {
    this.scores = appService.getTopScores().pipe(
      catchError(err => {
        this.err = err;
        return of([]);
      })
    );
  }
}
