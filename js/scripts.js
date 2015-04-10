var triangle = function(a, b, c) {

  var lengths = [a, b, c],
      sorted = [];

//sorts inputs from smallest to largest
  sorted = lengths.sort(function(a, b) { return a-b});

  if (sorted[0] + sorted[1] > sorted[2]) {

    if ((sorted[0] != sorted[1]) && (sorted[0] != sorted[2]) && (sorted[1] != sorted[2])) {
      return "scalene";
    }

    if ((sorted[0] === sorted[1]) && (sorted[0] != sorted[2])) {
      return "isosceles";
    }

    if ((sorted[0] === sorted[1]) && (sorted[0] === sorted[2]) && (sorted[1] === sorted[2])) {
      return "equilateral";
    }

  } else {
    return false;
  }

};
