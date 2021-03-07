function minimumLengthEncoding(words: string[]): number {
  const set = new Set<string>(words);
  for (const w of words) {
    for (let i = 1; i < w.length; i++) {
      set.delete(w.substr(i));
    }
  }

  return Array.from(set).reduce((acc, w) => acc + w.length + 1, 0);
}
