import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ScoreEntry } from '@cypress-demo/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user: Partial<ScoreEntry>;

  constructor(private http: HttpClient) {}

  setUser(username: string, selectedColor: string, selectedShape: string) {
    this.user = {
      username,
      color: selectedColor,
      shape: selectedShape
    };
  }

  getTopScores() {
    return this.http.get<ScoreEntry[]>('/api/scores');
  }

  submitScore(score: number) {
    return this.http.post('/api/scores', { ...this.user, score }).toPromise();
  }
}
