import nodemailer from 'nodemailer';
import { EmployeesRepository } from './EmployeesRepository';
import { MailerOptions } from './DataTypes';
import { EmailService } from './EmailService';

export class BirthdayService {
  constructor(private employeesRepository: EmployeesRepository, private emailService: EmailService) {}

  sendGreetings(birthday: Date | null) {
    if (!birthday) {
      console.log('Birthday not a valid date.');
      // throw new Error('Birthday not a valid date.');
      return;
    }

    const employeesBirthday = this.employeesRepository.findWithBirthday(birthday);

    let mailerOptions: MailerOptions;
    let emailTo: string, emailText: string, emailHtml: string;

    const emailFrom = '"Test" <testing@example.com>';
    const emailSubject = 'Happy Birthday';

    const emailBodyTemplate = 'Happy Birthday, dear %NAME%';

    employeesBirthday.forEach((employee) => {
      emailTo = `"${employee.getFirstName()} ${employee.getLastName()}" <${employee.getEmail}>`;
      emailText = emailBodyTemplate.replace('%NAME%', `${employee.getFirstName()} ${employee.getLastName()}`);
      emailHtml = `<div>${emailText}</div>`;

      mailerOptions = {
        from: emailFrom,
        subject: emailSubject,
        to: emailTo,
        text: emailText,
        html: emailHtml,
      };

      console.log('Happy Birthday: ' + employee);

      this.emailService.sendEmail(mailerOptions);
    });
  }
}
