function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length === 0) return true;
  let ransomNoteList: string[] = [...ransomNote];
  let magzineList: string[] = [...magazine];
  for (let i = 0; i < ransomNoteList.length; i++) {
    //remove the char from the magzine once its been used.
    if (magzineList.includes(ransomNoteList[i])) {
      magzineList[magzineList.indexOf(ransomNoteList[i])] = '';
    } else {
      return false;
    }
  }
  return true;
}

console.log(canConstruct('aa', 'aab'));
