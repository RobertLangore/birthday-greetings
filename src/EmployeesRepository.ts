import { Employee } from './Employee';

export class EmployeesRepository {
  constructor(public employees: Employee[]) {}

  findWithBirthday(date: Date | null) {
    if (!date) {
      return [];
    }

    return this.employees.filter((employee) => employee.isBirthday(date));
  }

  listAll() {
    this.employees.forEach((employee) => console.log(employee));
  }
}
