import { Country } from '../shared/country';
import { Person } from '../shared/person';

export class Player extends Person {
  // todo: multiple positions
  position: string;
  rating: number;
  fitness: number;
  shirtNumber: number | null;
  injured: boolean;
  // todo: change to club when class is implemented
  club: string | null;

  // todo add skills

  constructor(
    firstName: string,
    lastName: string,
    birthDate: Date,
    country: Country,
    position: string,
    rating: number,
    fitness: number,
    injured: boolean,
    shirtNumber: number,
    club: string
  ) {
    super(firstName, lastName, country, birthDate);
    this.position = position;
    this.rating = rating;
    this.fitness = fitness;
    this.shirtNumber = shirtNumber;
    this.injured = injured;
    this.club = club;
  }

  public setShirtNumber(shirtNumber: number) {
    this.shirtNumber = shirtNumber;
  }

  public setFitness(fitness: number) {
    this.fitness = fitness;
  }

  public setInjured(injured: boolean) {
    this.injured = injured;
  }

  public setClub(club: string) {
    this.club = club;
  }

  public setRating(rating: number) {
    this.rating = rating;
  }
}
