import hasFormat from './hasFormat.js';

export default class Invoice implements hasFormat {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}