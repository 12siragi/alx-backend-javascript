// 3-get_ids_sum.js

export default function getStudentIdsSum(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return 0;
  }

  // Use reduce to sum up all the student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}
