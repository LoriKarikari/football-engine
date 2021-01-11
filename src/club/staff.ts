import { Country } from '../shared/country';
import { Person } from '../shared/person';

interface Coaching {
  attacking: number;
  defending: number;
  fitness: number;
  mental: number;
  tactical: number;
  technical: number;
  youngsters: number;
}

interface Goalkeeping {
  distribution: number;
  handling: number;
  shotStopping: number;
}

interface Mental {
  adaptability: number;
  determination: number;
  discipline: number;
  manMgmt: number;
  motivating: number;
}

interface Knowledge {
  playerAbility: number;
  potential: number;
  staffAbility: number;
  negotiating: number;
  tactical: number;
}

export class Staff extends Person {
  goalKeeping?: Goalkeeping;
  mental?: Mental;
  knowledge?: Knowledge;
  coaching?: Coaching;

  constructor(
    firstName: string,
    lastName: string,
    birthDate: Date,
    country: Country
  ) {
    super(firstName, lastName, country, birthDate);
  }

  public setGoalKeeping(goalkeeping: Goalkeeping) {
    this.goalKeeping = goalkeeping;
  }

  public setMental(mental: Mental) {
    this.mental = mental;
  }

  public setCoaching(coaching: Coaching) {
    this.coaching = coaching;
  }
}
