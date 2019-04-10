class Coolculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  highest(a, b) {
    return (a > b) ? a : b;
  }

  lowest(a, b) {
    return (a < b) ? a : b;
  }

  double(a) {
    return a + a;
  }

  square(a) {
    return a * a;
  }

  raise(a, b) {
    return a ** b;
  }

  isNegative(a) {
    return a < 0;
  }

  isPositive(a) {
    return a > 0;
  }

  isCool(a) {
    let str = a.toString();

    if (str.length === 1) {
      return true;
    }
    return (str.charAt(0) === str.charAt(str.length - 1));
  }

  sum(arr) {
    return arr.reduce((accumulator, value) => accumulator + value);
  }

  multiplyArray(arr) {
    return arr.reduce((accumulator, value) => accumulator * value);
  }

  mean(arr) {
    return arr.reduce((accumulator, value) => accumulator + value) / arr.length;
  }

  factorial(a) {
    if (a == 0) {
      return 1;
    } else {
      return a * this.factorial(a - 1);
    }
  }

  random(a) {
    return (Math.random() * a);
  }
}

module.exports = Coolculator
