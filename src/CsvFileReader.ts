import fs from 'fs';

export class CsvFileReader {
  private data: string[][] = [];

  constructor(private filename: string, private skipLines = 1) {}

  getData(): string[][] {
    return this.data
  }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .slice(this.skipLines)
      .map((row: string): string[] => {
        return row.split(',').map((value) => value.trim());
      });
  }
}
