import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MaterialDepsModule } from './material-deps/material-deps.module';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'game', component: GameComponent },
  { path: 'scoreboard', component: ScoreboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GameComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialDepsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
