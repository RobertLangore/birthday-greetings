import { Employee } from './Employee';

export class EmployeesRepository {
  constructor(public employees: Employee[]) {}

  findWithBirthday(date: Date) {
    return this.employees.filter((employee) => employee.isBirthday(date));
  }
}
