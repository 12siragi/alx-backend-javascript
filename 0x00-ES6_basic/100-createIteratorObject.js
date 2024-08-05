export default function createIteratorObject(report) {
  // Get the values (employee lists) from the allEmployees object
  const employeeLists = Object.values(report.allEmployees);
  
  // Flatten the list of employee arrays into a single array
  const allEmployees = employeeLists.flat();
  
  // Return an iterator over the flattened array
  return allEmployees[Symbol.iterator]();
}
