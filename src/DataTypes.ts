export interface EmployeeRecord {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  email: string;
}

export interface MailerConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface MailerOptions {
  from: string;
  subject: string;
  to: string;
  text: string;
  html: string;
}
