import { EmployeesRepository } from './EmployeesRepository';
import { MailerOptions } from './DataTypes';
import { EmailService } from './EmailService';
import { mailConfig } from './appConfig';

export class BirthdayService {
  constructor(private employeesRepository: EmployeesRepository, private emailService: EmailService) {}

  sendGreetings(birthday: Date | null) {
    if (!birthday) {
      console.log('Birthday is not a valid date.');
      // throw new Error('Birthday is not a valid date.');
      return;
    }

    const employeesBirthday = this.employeesRepository.findWithBirthday(birthday);

    let mailerOptions: MailerOptions;
    let emailTo: string, emailText: string, emailHtml: string;

    employeesBirthday.forEach((employee) => {
      emailTo = `"${employee.getFullName()}" <${employee.getEmail}>`;
      emailText = mailConfig.body.replace('%NAME%', `${employee.getFullName()}`);
      emailHtml = `<div>${emailText}</div>`;

      mailerOptions = {
        from: mailConfig.from,
        subject: mailConfig.subject,
        to: emailTo,
        text: emailText,
        html: emailHtml,
      };

      console.log('Happy Birthday: ' + employee);

      this.emailService.sendEmail(mailerOptions);
    });
  }
}
