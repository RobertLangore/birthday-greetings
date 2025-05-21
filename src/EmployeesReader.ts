import { CsvFileReader } from './CsvFileReader';
import { Employee } from './Employee';
import { EmployeeRecord } from './DataTypes';
import { dateFromString } from './utils';

interface DataReader {
  read(): void;
  getData(): string[][];
}

export class EmployeesReader {
  private data: EmployeeRecord[] = [];

  constructor(private reader: DataReader) {}

  static fromCsv(filename: string): EmployeesReader {
    return new EmployeesReader(new CsvFileReader(filename));
  }

  load(): void {
    this.reader.read();
    this.data = this.reader.getData().map(this.mapRecord);
  }

  getData(): EmployeeRecord[] {
    return this.data;
  }

  mapRecord(row: string[]): EmployeeRecord {
    return {
      lastName: row[0],
      firstName: row[1],
      dateOfBirth: dateFromString(row[2]),
      email: row[3],
    };
  }

  getRepository(): Employee[] {
    return this.data.map((record) => new Employee(record.firstName, record.lastName, record.dateOfBirth, record.email));
  }
}
