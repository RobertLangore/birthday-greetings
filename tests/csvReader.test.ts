import { CsvFileReader } from '../src/CsvFileReader';

const dataFilename = './data/employees.csv';
const csvFileReader = new CsvFileReader(dataFilename);

describe('testing loading data from file', () => {
  test('there should be 4 records', () => {
    csvFileReader.read();
    expect(csvFileReader.getData().length).toBe(4);
  });
});
