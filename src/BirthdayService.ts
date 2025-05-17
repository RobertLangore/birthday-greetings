import nodemailer from 'nodemailer';
import { EmployeesRepository } from './EmployeesRepository';
import { MailerConfigType } from './DataTypes';

interface MailerOptions {
  from: string;
  subject: string;
  to: string;
  text: string;
  html: string;
}

export class BirthdayService {
  constructor(public employeesRepository: EmployeesRepository, public mailerConfig: MailerConfigType) {}

  sendGreetings(birthday: Date | null) {
    if (!birthday) {
      console.log('Birthday not a valid date.');
      // throw new Error('Birthday not a valid date.');
      return;
    }

    const employeesBirthday = this.employeesRepository.findWithBirthday(birthday);

    const transporter = nodemailer.createTransport(this.mailerConfig);

    let mailerOptions: MailerOptions;
    let emailTo: string, emailText: string, emailHtml: string;

    const emailFrom = '"Test" <testing@example.com>';
    const emailSubject = 'Happy Birthday';

    const emailBodyTemplate = 'Happy Birthday, dear %NAME%';

    employeesBirthday.forEach((employee) => {
      (async () => {
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

        // const emailResult = await transporter.sendMail(mailerOptions);
        // console.log('Email sent: ', emailResult.messageId);
      })();
    });
  }
}
