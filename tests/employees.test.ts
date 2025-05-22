import { Employee } from './../src/Employee';
import { EmployeesReader } from './../src/EmployeesReader';
import { EmployeesRepository } from './../src/EmployeesRepository';
import { dateFromString } from '../src/utils';
import { dataFilename } from '../src/appConfig';

const employees = EmployeesReader.fromCsv(dataFilename);
employees.load();

const employeesRepository = new EmployeesRepository(employees.getRepository());

describe('testing loading employees data', () => {
  test('there should be 4 records read', () => {
    expect(employees.getData().length).toBe(4);
  });

  test('there should be 4 employees', () => {
    expect(employeesRepository.employees.length).toBe(4);
  });

  test('there should be 3 employee with valid birthday', () => {
    const employeesValidBirthday = employeesRepository.employees.filter((employee) => employee.dateOfBirth !== null);
    expect(employeesValidBirthday.length).toBe(3);
  });

  test('there should be 2 employees with given birthday', () => {
    const birthday = dateFromString('1982/10/08');

    const employeesRepository = new EmployeesRepository(employees.getRepository());
    const employeesBirthday = employeesRepository.findWithBirthday(birthday);
    expect(employeesBirthday.length).toBe(2);
  });

  test('Given birthday should match', () => {
    const employee = new Employee('First', 'Last', dateFromString('1988/10/12'), 'test@email.com');
    const birthday = dateFromString('1992/10/12');

    expect(employee.isBirthday(birthday)).toBe(true);
  });

  test('Given birthday should not match', () => {
    const employee = new Employee('First', 'Last', dateFromString('1988/10/12'), 'test@email.com');
    const birthday = dateFromString('1992/12/12');

    expect(employee.isBirthday(birthday)).toBe(false);
  });
});
