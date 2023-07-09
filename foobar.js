// Fungsi bilangan prima
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
const numbers = Array.from({
  length: 100
}, (num, index) => index + 1);
// Membalik urutan array
numbers.reverse();
numbers.forEach((number) => {
  if (isPrime(number)) {
    return; 
  }
  let output = '';
  if (number % 3 === 0) {
    output += 'Foo';
  }
  else if (number % 5 === 0) {
    output += 'Bar';
  }
  else {
    output = number;
  }

  process.stdout.write(output + ', '); // Mencetak angka menyamping
});