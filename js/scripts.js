var triangle = function(a, b, c) {

//math.abs allows for negative input values
  var lengths = [Math.abs(a), Math.abs(b), Math.abs(c)],
      sorted = [],
      squares = [],
      i;

//sorts inputs from smallest to largest
  sorted = lengths.sort(function(a, b) { return a-b});


//squares sorted values for right triangle check
  for (i = 0; i < sorted.length; i++) {
    squares[i] = Math.pow(sorted[i], 2);
  }

  if (sorted[0] + sorted[1] > sorted[2]) {

//all sides different
    if ((sorted[0] != sorted[1]) && (sorted[0] != sorted[2]) && (sorted[1] != sorted[2])
        && (squares[0] + squares[1] != squares[2])) {
      return "scalene";
    }

//two sides the same
    if ((sorted[0] === sorted[1]) && (sorted[0] != sorted[2])) {
      return "isosceles";
    }

//all sides the same
    if ((sorted[0] === sorted[1]) && (sorted[0] === sorted[2]) && (sorted[1] === sorted[2])) {
      return "equilateral";
    }

// a^2 + b^2 = c^2
    if (squares[0] + squares[1] === squares[2]) {
      return "right";
    }

//not a triangle
  } else {
    return "impossible";
  }

};

$(document).ready(function() {

  $('form#input').submit(function(event) {

//clears the type each time button is pressed so you can check again without refreshing page
    $('#type').empty();

    var a = $('input#side1').val();
    var b = $('input#side2').val();
    var c = $('input#side3').val();

    var result = triangle(a, b, c);

    $('#type').text(result);

  $('#result').show()
  event.preventDefault();

  });

});
