import fs from 'fs';
import csvParser from 'csv-parser';

export class CsvFileReader<T> {
  data: T[] = [];

  constructor(private filename: string, private headers: string[]) {}

  async read(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      fs.createReadStream(this.filename)
        .pipe(
          csvParser({
            skipLines: 1,
            headers: this.headers,
            mapValues: ({ value }) => value.trim(),
          })
        )
        .on('headers', (headers) => {
          // console.log('Headers: ', headers);
        })
        .on('data', (row) => this.data.push(row))
        .on('end', () => {
          resolve(this.data);
        })
        .on('error', reject);
    });
  }
}
