function rankTeams(votes: string[]): string {
  if (votes.length === 0) {
    return '';
  }

  //map initialization
  const length = votes[0].length;
  let map = new Map<string, string[]>();
  for (let team of [...votes[0]].sort()) {
    map.set(team, new Array(length).fill('0'));
  }

  //traverse through all votes
  for (let vote of votes) {
    for (let char of vote) {
      const index = vote.indexOf(char);
      let curr = map.get(char) as string[];
      const number = parseInt(curr[index], 10);
      curr[index] = (number + 1).toString();
      map.set(char, curr);
    }
  }

  let result: any = [];
  for (let team of map.keys()) {
    result.push([team, map.get(team)]);
  }
  const sorted = result.sort((a: any, b: any) => {
    const rankA = a[1].join('');
    const rankB = b[1].join('');
    if (rankA.concat(rankB) > rankB.concat(rankA)) {
      return -1;
    }
    return 1;
  });

  let res = '';
  for (let item of sorted) {
    res += item[0];
  }
  return res;
}

