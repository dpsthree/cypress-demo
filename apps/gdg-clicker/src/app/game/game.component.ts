import { Component, OnDestroy, OnInit } from '@angular/core';

import { AppService } from '../app.service';

let spinCof = 30;

@Component({
  selector: 'cypress-demo-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  count = 0;
  time = 0;
  interval: number;
  gameOver = false;
  scoreSubmitted = false;
  rotation = 0;
  constructor(private appService: AppService) {}

  clickIt() {
    this.count++;
    this.rotation += spinCof;
    spinCof *= 1.15;
    this.rotation = this.rotation + this.count;
  }

  ngOnInit() {
    this.interval = window.setInterval(() => {
      this.time += 0.5;
      if (this.time >= 10) {
        this.gameOver = true;
        this.submitScore();
        clearInterval(this.interval);
      }
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  submitScore() {
    this.appService
      .submitScore(this.count)
      .then(() => (this.scoreSubmitted = true));
  }
}
