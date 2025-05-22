import { EmployeesReader } from './EmployeesReader';
import { EmployeesRepository } from './EmployeesRepository';
import { BirthdayService } from './BirthdayService';
import { EmailService } from './EmailService';
import { dataFilename, birthday, mailerConfig } from './appConfig';

const employees = EmployeesReader.fromCsv(dataFilename);
employees.load();

const employeesRepository = new EmployeesRepository(employees.getRepository());
// employeesRepository.listAll();

const emailService = new EmailService(mailerConfig);

const birthdayService = new BirthdayService(employeesRepository, emailService);
birthdayService.sendGreetings(birthday);
