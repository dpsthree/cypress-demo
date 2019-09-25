import { Injectable } from '@nestjs/common';
import { ScoreEntry } from '@cypress-demo/api-interfaces';
import * as _ from 'lodash';

const seededScores = [
  {
    username: '@stl_angular',
    score: 70,
    shape: 'triangle',
    color: 'red'
  },
  {
    username: '@TheEvergreenDev',
    score: 75,
    shape: 'parallelogram',
    color: 'blue'
  },
  {
    username: '@wnodom',
    score: 75,
    shape: 'circle',
    color: 'pink'
  },
  {
    username: '@angularbootcamp',
    score: 110,
    shape: 'square',
    color: 'green'
  },
  {
    username: '@oasisdigitalstl',
    score: 125,
    shape: 'square',
    color: 'orange'
  },
  {
    username: '@TheEvergreenDev',
    score: 125,
    shape: 'triangle',
    color: 'blue'
  }
];

@Injectable()
export class AppService {
  getData(): ScoreEntry[] {
    return _.clone(seededScores).reverse();
  }

  addScore(score: ScoreEntry) {
    seededScores.splice(
      _.sortedIndexBy(seededScores, score, 'score'),
      0,
      score
    );
  }
}
