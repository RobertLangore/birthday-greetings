import { CsvFileReader } from '../src/CsvFileReader';
import { EmployeesDataTypesIn } from '../src/DataTypes';

const dataFilename = './data/employees.csv';
const dataHeaders = ['last_name', 'first_name', 'date_of_birth', 'email'];

const csvFileReader = new CsvFileReader<EmployeesDataTypesIn>(dataFilename, dataHeaders);

describe('testing loading data from file', () => {
  test('there should be 4 records', () => {
    (async () => {
      await csvFileReader.read();
      expect(csvFileReader.data.length).toBe(4);
    })();
  });
});
