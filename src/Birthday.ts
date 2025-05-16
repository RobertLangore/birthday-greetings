export class Birthday {
  private date: Date;

  constructor(date?: string | Date) {
    if (!date) {
      this.date = new Date();
    } else {
      if (date instanceof Date) {
        this.date = date;
      } else {
        let ts: number = Date.parse(date);

        if (isNaN(ts)) {
          throw new Error(`Invalid date format: ${date}. Expected format: YYYY/MM/DD`);
        }

        this.date = new Date(ts);
      }
    }
  }

  getDate(): number {
    return this.date.getDate();
  }

  getMonth(): number {
    return this.date.getMonth();
  }

  isSamey(date: Date): boolean {
    return date.getDate() === this.getDate() && date.getMonth() === this.getMonth();
  }
}
