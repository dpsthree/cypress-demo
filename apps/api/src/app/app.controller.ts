import { Controller, Get, Post, Body } from '@nestjs/common';

import { ScoreEntry } from '@cypress-demo/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('scores')
  getScores(): ScoreEntry[] {
    return this.appService.getData();
  }

  @Post('scores')
  async addScore(@Body() score: ScoreEntry) {
    this.appService.addScore(score);
  }
}
