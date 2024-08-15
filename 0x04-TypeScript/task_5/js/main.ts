// task_5/js/main.ts

// Define the MajorCredits interface with a brand property
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

// Define the MinorCredits interface with a brand property
interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

// Example usage
const major1: MajorCredits = { credits: 10, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 20, brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 5, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 15, brand: 'MinorCredits' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajor.credits}`);
console.log(`Total Minor Credits: ${totalMinor.credits}`);
