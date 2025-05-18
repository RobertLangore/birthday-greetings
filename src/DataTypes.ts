export interface EmployeeDataType {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  email: string;
}

export interface MailerConfigType {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}
