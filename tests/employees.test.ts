import { Employee } from '../src/Employee';
import { EmployeesReader } from '../src/EmployeesReader';
import { EmployeesRepository } from '../src/EmployeesRepository';

const dataFilename = './data/employees.csv';
const dataHeaders = ['last_name', 'first_name', 'date_of_birth', 'email'];

describe('testing loading employees data', () => {
  test('there should be 2 records read', () => {
    (async () => {
      const employees = EmployeesReader.fromCsv(dataFilename, dataHeaders);
      await employees.load();

      expect(employees.data.length).toBe(2);
    })();
  });

  test('there should be 2 employees', () => {
    (async () => {
      const birthday = new Date('1982/10/08');

      const employees = EmployeesReader.fromCsv(dataFilename, dataHeaders);
      await employees.load();

      const employeesRepository = new EmployeesRepository(employees.getRepository());
      const employeesBirthday = employeesRepository.findWithBirthday(birthday);
      expect(employeesRepository.employees.length).toBe(2);
    })();
  });

  test('there should be 1 employees with given birthday', () => {
    (async () => {
      const birthday = new Date('1982/10/08');

      const employees = EmployeesReader.fromCsv(dataFilename, dataHeaders);
      await employees.load();

      const employeesRepository = new EmployeesRepository(employees.getRepository());
      const employeesBirthday = employeesRepository.findWithBirthday(birthday);
      expect(employeesBirthday.length).toBe(1);
    })();
  });

  test('Given birthday should match', () => {
    (async () => {
      const employee = new Employee('First', 'Last', new Date('1988/10/12'), 'test@email.com');
      const birthday = new Date('1992/10/12');

      expect(employee.isBirthday(birthday)).toBe(true);
    })();
  });

  test('Given birthday should not match', () => {
    (async () => {
      const employee = new Employee('First', 'Last', new Date('1988/10/12'), 'test@email.com');
      const birthday = new Date('1992/12/12');

      expect(employee.isBirthday(birthday)).toBe(false);
    })();
  });
});
