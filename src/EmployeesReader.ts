import { CsvFileReader } from './CsvFileReader';
import { Employee } from './Employee';
import { EmployeeDataType } from './DataTypes';
import { dateFromString } from './utils';

interface DataReader {
  read(): void;
  data: string[][];
}

export class EmployeesReader {
  static fromCsv(filename: string): EmployeesReader {
    return new EmployeesReader(new CsvFileReader(filename));
  }

  data: EmployeeDataType[] = [];

  constructor(public reader: DataReader) {}

  mapRecord(row: string[]): EmployeeDataType {
    return {
      lastName: row[0],
      firstName: row[1],
      dateOfBirth: dateFromString(row[2]),
      email: row[3],
    };
  }

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map((record) => this.mapRecord(record));
  }

  getRepository(): Employee[] {
    return this.data.map((record) => new Employee(record.firstName, record.lastName, record.dateOfBirth, record.email));
  }
}
