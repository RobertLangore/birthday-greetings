import { CsvFileReader } from '../src/CsvFileReader';
import { dataFilename } from '../src/appConfig';

const csvFileReader = new CsvFileReader(dataFilename);

describe('testing loading data from file', () => {
  test('there should be 4 records', () => {
    csvFileReader.read();
    expect(csvFileReader.getData().length).toBe(4);
  });
});
