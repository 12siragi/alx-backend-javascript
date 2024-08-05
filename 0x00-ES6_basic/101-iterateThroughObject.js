export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join the items with ' | '
  return [...reportWithIterator].join(' | ');
}
