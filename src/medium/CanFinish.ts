function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (numCourses === 0) {
    return true;
  }

  //Make list of remaining courses using Set
  let courseList = new Set<number>();
  for (let i = 0; i < numCourses; i++) {
    courseList.add(i);
  }

  let courseWithPrereqList = new Set<number>();
  for (let pair of prerequisites) {
    if (!courseWithPrereqList.has(pair[0])) {
      courseWithPrereqList.add(pair[0]);
    }
  }

  //if every single course has a pre-req in the first place, then it returns false
  if (courseWithPrereqList.size === numCourses) {
    return false;
  } else if (courseWithPrereqList.size === 0) {
    return true;
  }

  //initialize courses without pre-req and delet these from courseList
  let coursesCanBeTakenList = [];
  for (let course of courseList) {
    if (!courseWithPrereqList.has(course)) {
      coursesCanBeTakenList.push(course);
      courseList.delete(course);
    }
  }

  while (coursesCanBeTakenList.length !== 0) {
    if (courseList.size === 0) {
      return true;
    }
    console.log('courseList: ', courseList);
    console.log('coursesCanBeTakenList: ', coursesCanBeTakenList);
    const size = coursesCanBeTakenList.length;
    for (let i = 0; i < size; i++) {
      const currCourse = coursesCanBeTakenList.shift();
      for (let pair of prerequisites) {
        if (
          pair[1] === currCourse &&
          !coursesCanBeTakenList.includes(pair[0])
        ) {
          coursesCanBeTakenList.push(pair[0]);
          courseList.delete(pair[0]);
        }
      }
    }
  }
  return courseList.size === 0;
}

console.log(
  canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
);
