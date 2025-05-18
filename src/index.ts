import { EmployeesReader } from './EmployeesReader';
import { EmployeesRepository } from './EmployeesRepository';
import { BirthdayService } from './BirthdayService';
import { MailerConfigType } from './DataTypes';
import { dateFromString } from './utils';

const dataFilename = './data/employees.csv';
const birthday = dateFromString('1982/10/08');

const mailerConfig: MailerConfigType = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: '<userEmail>',
    pass: '<userPass>',
  },
};

const employees = EmployeesReader.fromCsv(dataFilename);
employees.load();

const employeesRepository = new EmployeesRepository(employees.getRepository());
// employeesRepository.listAll();

const birthdayService = new BirthdayService(employeesRepository, mailerConfig);

birthdayService.sendGreetings(birthday);
