import nodemailer from 'nodemailer';
import { MailerConfig, MailerOptions } from './DataTypes';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(mailerConfig: MailerConfig) {
    this.transporter = nodemailer.createTransport(mailerConfig);
  }

  async sendEmail(mailerOptions: MailerOptions) {
    const emailResult = await this.transporter.sendMail(mailerOptions);
    console.log('Email sent: ', emailResult.messageId);
  }
}
