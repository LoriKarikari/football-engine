import { Ball } from './ball';
import { Pitch } from './pitch';
import { Team } from './team';

export class Match {
  private homeTeam: Team;
  private awayTeam: Team;
  private pitch: Pitch;

  // intitialize new match with home team, away team and pitch
  constructor(homeTeam: Team, awayTeam: Team, pitch: Pitch) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.pitch = pitch;
  }

  public decideKickOffTeam(teams: Team[]) {
    return teams[Math.floor(Math.random() * teams.length)];
  }

  // todo: switch players'position
  public switchSide(team: Team) {}

  // todo: consider startHalf() instead of two seperate
  // depends on further implementation
  public startFirstHalf() {
    const kickOffTeam = this.decideKickOffTeam([this.homeTeam, this.awayTeam]);
    const otherTeam =
      kickOffTeam === this.homeTeam ? this.awayTeam : this.homeTeam;

    // place ball on middle circle
    const ball = new Ball(
      this.pitch.getWidth() / 2,
      this.pitch.getHeight() / 2
    );
  }

  public startSecondHalf() {
    // place ball on middle circle
    const ball = new Ball(
      this.pitch.getWidth() / 2,
      this.pitch.getHeight() / 2
    );
  }

  public getScore() {}
}
