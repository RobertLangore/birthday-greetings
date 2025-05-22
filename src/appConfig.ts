import { MailerConfig } from './DataTypes';
import { dateFromString } from './utils';

export const dataFilename = './data/employees.csv';
export const birthday = dateFromString('1982/10/08');

export const mailerConfig: MailerConfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: '<userEmail>',
    pass: '<userPass>',
  },
};
