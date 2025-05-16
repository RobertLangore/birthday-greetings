// import { CompareDate } from './BirthDay';
import { areSameDates } from './utils';

export class Employee {
  constructor(public firstName: string, public lastName: string, public dateOfBirth: Date, public email: string) {}

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getEmail(): string {
    return this.email;
  }

  isBirthday(date: Date): boolean {
    return areSameDates(this.dateOfBirth, date);
  }

  toString(): string {
    return `Employee ${this.firstName} ${this.lastName} <${
      this.email
    }> born ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()}-${this.dateOfBirth.getDate()}`;
  }
}
