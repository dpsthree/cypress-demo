import { Component, OnDestroy, OnInit } from '@angular/core';

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
  rotation = 0;
  gameOver = false;

  clickIt() {
    this.count++;
    // Adds the fun spinny bits
    this.rotation = this.rotation + spinCof + this.count;
    spinCof *= 1.15;
  }

  // Boring stuff needed to start and stop the game clock
  ngOnInit() {
    this.interval = window.setInterval(() => {
      this.time += 0.5;
      if (this.time >= 10) {
        clearInterval(this.interval);
        this.gameOver = true;
      }
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
