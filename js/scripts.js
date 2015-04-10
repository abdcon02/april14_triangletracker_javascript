var triangle = function(a, b, c) {

  var lengths = [Math.abs(a), Math.abs(b), Math.abs(c)],
      sorted = [],
      squares = [],
      i;

//sorts inputs from smallest to largest
  sorted = lengths.sort(function(a, b) { return a-b});


  for (i = 0; i < sorted.length; i++) {
    squares[i] = Math.pow(sorted[i], 2);
  }

  if (sorted[0] + sorted[1] > sorted[2]) {

    if ((sorted[0] != sorted[1]) && (sorted[0] != sorted[2]) && (sorted[1] != sorted[2])
        && (squares[0] + squares[1] != squares[2])) {
      return "scalene";
    }

    if ((sorted[0] === sorted[1]) && (sorted[0] != sorted[2])) {
      return "isosceles";
    }

    if ((sorted[0] === sorted[1]) && (sorted[0] === sorted[2]) && (sorted[1] === sorted[2])) {
      return "equilateral";
    }

    if (squares[0] + squares[1] === squares[2]) {
      return "right";
    }

  } else {
    return "impossible";
  }

};

$(document).ready(function() {

  $('form#input').submit(function(event) {

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
