import { Country } from './country';

export class Person {
  firstName: string;
  lastName: string;
  birthDate: Date;
  country: Country;

  constructor(
    firstName: string,
    lastName: string,
    country: Country,
    birthDate: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.birthDate = birthDate;
  }
}
