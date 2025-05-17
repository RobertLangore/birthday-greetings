// import { CompareDate } from './BirthDay';
import { areSameDates } from './utils';

export class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Date | null,
    public email: string
  ) {}

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getEmail(): string {
    return this.email;
  }

  isBirthday(date: Date | null): boolean {
    return areSameDates(this.dateOfBirth, date);
  }

  toString(): string {
    let str = `Employee ${this.firstName} ${this.lastName} <${this.email}>`;

    if (this.dateOfBirth) {
      str += ` born ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth() + 1}-${this.dateOfBirth.getDate()}`;
    } else {
      str += ' (birthday unknown)';
    }

    return str;
  }
}
