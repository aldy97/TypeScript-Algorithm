function maxEnvelopes(envelopes: number[][]): number {
  if (envelopes.length === 0) return 0;

  // whether e2 can be put inside e1
  const isFit = (e1: number[], e2: number[]): boolean => {
    const [w1, h1] = e1;
    const [w2, h2] = e2;
    return (w1 > w2 && h1 > h2) || (w1 > h2 && h1 > w2);
  };

  let dolls = new Array<number[]>();

  for (const envelope of envelopes) {
    if (dolls.length === 0) {
      dolls.push(envelope);
    } else {
      let fit = true;
      for (const doll of dolls) {
        if (!isFit(envelope, doll) && !isFit(doll, envelope)) {
          fit = false;
          break;
        }
      }
      if (fit) dolls.push(envelope);
    }
  }

  return dolls.length;
}
