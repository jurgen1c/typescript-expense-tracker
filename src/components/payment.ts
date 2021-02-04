import hasFormat from './hasFormat.js';

export default class Payment implements hasFormat {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`
  }
}