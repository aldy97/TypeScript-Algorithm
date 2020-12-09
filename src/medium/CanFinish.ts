// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//   if (numCourses === 0) {
//     return true;
//   }

//   let courseWithPreq = new Map<number, number[]>();
//   for (const pair of prerequisites) {
//     const preq = courseWithPreq.get(pair[0]) || [];
//     courseWithPreq.set(pair[0], [...preq, pair[1]]);
//   }

//   function backtrack(taken: number[], curr: number) {
//     let added = false;
//     if (!courseWithPreq.has(curr)) {
//       taken.push(curr);
//       added = true;
//     } else {
//       let meetReq = true;
//       for (const course of courseWithPreq.get(curr) as number[]) {
//         if (!taken.includes(course)) {
//           meetReq = false;
//           break;
//         }
//       }

//       if (meetReq) {
//         taken.push(curr);
//         added = true;
//       }
//     }

//     if (taken.length === numCourses) {
//       return true;
//     }

//     if (added) {
//       for (let i = 0; i < numCourses; i++) {
//         if (!taken.includes(i)) {
//           if (backtrack(taken, i)) {
//             return true;
//           }
//         }
//       }
//     }
//   }

//   for (let i = 0; i < numCourses; i++) {
//     if (backtrack([], i)) {
//       return true;
//     }
//   }

//   return false;
// }

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (numCourses === 0) {
    return true;
  }

  // build a map as course as key and all preReq as value
  let courseWithPreq = new Map<number, number[]>();
  for (const pair of prerequisites) {
    const preq = courseWithPreq.get(pair[0]) || [];
    courseWithPreq.set(pair[0], [...preq, pair[1]]);
  }

  function backtrack(visited: Set<number>, unVisited: Set<number>) {
    if (visited.size === numCourses) {
      return true;
    }

    for (const course of unVisited) {
      if (!courseWithPreq.get(course)) {
        visited.add(course);
        unVisited.delete(course);
        if (backtrack(visited, unVisited)) {
          return true;
        }
        visited.delete(course);
        unVisited.add(course);
      } else {
        const required = courseWithPreq.get(course) as number[];
        let metReq = true;
        for (const c of required) {
          if (!visited.has(c)) {
            metReq = false;
            break;
          }
        }
        if (metReq) {
          visited.add(course);
          unVisited.delete(course);
          if (backtrack(visited, unVisited)) {
            return true;
          }
          visited.delete(course);
          unVisited.add(course);
        }
      }
    }

    return false;
  }

  let arr: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    arr.push(i);
  }
  const visited = new Set<number>();
  const unVisited = new Set<number>(arr);
  return backtrack(visited, unVisited);
}
