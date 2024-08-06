import divideFunction from './8-try.js';

try {
  console.log(divideFunction(10, 2)); // Should log 5
} catch (error) {
  console.log(error.message);
}

try {
  console.log(divideFunction(10, 0)); // Should throw an error
} catch (error) {
  console.log(error.message); // Should log 'cannot divide by 0'
}
