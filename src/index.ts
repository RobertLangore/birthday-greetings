import { EmployeesReader } from './EmployeesReader';
import { EmployeesRepository } from './EmployeesRepository';
import { BirthdayService } from './BirthdayService';
import { MailerConfigType } from './DataTypes';

const dataFilename = './data/employees.csv';
const dataHeaders = ['last_name', 'first_name', 'date_of_birth', 'email'];
const birthday = new Date('1982/10/08');

const mailerConfig: MailerConfigType = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: '<userEmail>',
    pass: '<userPass>',
  },
};

(async () => {
  const employees = EmployeesReader.fromCsv(dataFilename, dataHeaders);
  await employees.load();

  const employeesRepository = new EmployeesRepository(employees.getRepository());

  const birthdayService = new BirthdayService(employeesRepository, mailerConfig);
  birthdayService.sendGreetings(birthday);
})();
