import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ScoreEntry } from '@cypress-demo/api-interfaces';

import { AppService } from '../app.service';

@Component({
  selector: 'cypress-demo-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  scores: Observable<ScoreEntry[]>;

  constructor(appService: AppService) {
    this.scores = appService.getTopScores();
  }
}
