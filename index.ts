/** A fops. They are very cute. */
export class Fops {
  /** Boop the fops */
  boop (): string {
    return "*blep*";
  }

  /** Cuddle the fops */
  cuddle (): string {
    return ">///<";
  }

  /** Snuggle the fops */
  snuggle (): string {
    return "u///u"
  }

  /** Pat the fops */
  pat (): string {
    return "^w^";
  }
}

/** A ready to play with Fops */
const defaultInstance: Fops = new Fops();
export default defaultInstance;
