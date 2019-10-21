import { ScoreEntry } from '@cypress-demo/api-interfaces';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

const seededScores = [
  {
    username: '@stl_angular',
    score: 35,
    shape: 'triangle',
    color: 'red'
  },
  {
    username: '@TheEvergreenDev',
    score: 37,
    shape: 'parallelogram',
    color: 'blue'
  },
  {
    username: '@wnodom',
    score: 37,
    shape: 'circle',
    color: 'pink'
  },
  {
    username: '@angularbootcamp',
    score: 55,
    shape: 'square',
    color: 'green'
  },
  {
    username: '@oasisdigitalstl',
    score: 62,
    shape: 'square',
    color: 'orange'
  },
  {
    username: '@TheEvergreenDev',
    score: 63,
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
