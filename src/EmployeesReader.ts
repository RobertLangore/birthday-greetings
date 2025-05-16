import { CsvFileReader } from './CsvFileReader';
import { Employee } from './Employee';
import { EmployeesDataTypesIn, EmployeesDataTypes } from './DataTypes';
import { dateStringToDate } from './utils';

interface DataReader<T> {
  read(): void;
  data: T[];
}

export class EmployeesReader {
  static fromCsv(filename: string, headers: string[]): EmployeesReader {
    return new EmployeesReader(new CsvFileReader<EmployeesDataTypesIn>(filename, headers));
  }

  data: EmployeesDataTypes[] = [];

  constructor(public reader: DataReader<EmployeesDataTypesIn>) {}

  async load(): Promise<void> {
    await this.reader.read();

    this.data = this.reader.data.map((record: EmployeesDataTypesIn): EmployeesDataTypes => this.mapRecord(record));
  }

  getRepository(): Employee[] {
    return this.data.map((record) => new Employee(record.firstName, record.lastName, record.dateOfBirth, record.email));
  }

  mapRecord(record: EmployeesDataTypesIn) {
    return {
      lastName: record.last_name,
      firstName: record.first_name,
      dateOfBirth: new Date(record.date_of_birth),
      email: record.email,
    };
  }
}
