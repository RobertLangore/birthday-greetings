export interface EmployeesDataTypesIn {
  last_name: string;
  first_name: string;
  date_of_birth: string;
  email: string;
}

export interface EmployeesDataTypes {
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
