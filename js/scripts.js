$(document).ready(function() {
    "use strict";

  $('form#input').submit(function(event) {

//clears the type each time button is pressed so you can check again without refreshing page
    $('#type').empty();

    var a = parseInt($('input#side1').val());
    var b = parseInt($('input#side2').val());
    var c = parseInt($('input#side3').val());

    var triangle = {side1: a,
                    side2: b,
                    side3: c,
                    height: function(){
                        var s = ((this.side1 + this.side2 + this.side3)/2);
                        var A = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));

                        var sorted = [parseInt(this.side1), parseInt(this.side2), parseInt(this.side3)].sort(function(x,y) {
                          return y-x;
                        });

                        var h = ( (2 * A) / sorted[0]);
                        return h;
                    },
                    type: function(){
                        var desc_number_array = [parseInt(this.side1), parseInt(this.side2), parseInt(this.side3)].sort(function(x,y) {
                          return y-x;
                        });

                        if (desc_number_array[0] <= (desc_number_array[1] + desc_number_array[2])){

                          if (this.side1 === this.side2 && this.side2 === this.side3 && this.side3 === this.side1){
                            $('#equilateral').append("<li>" + this.side1 + ", " + this.side2 + ", " + this.side3 + "</li>");
                            return "equilateral";

                          } if (this.side1 === this.side2 || this.side2 === this.side3 || this.side3 === this.side1 ){
                              $('#isosceles').append("<li>" + this.side1 + ", " + this.side2 + ", " + this.side3 + "</li>");
                              return "isosceles";

                          } if ((this.side1 != this.side2) && (this.side2 != this.side3)) {
                              $('#scalene').append("<li>" + this.side1 + ", " + this.side2 + ", " + this.side3 + "</li>");
                              return "scalene";

                        }} else {
                          $('#impossible').append("<li>" + this.side1 + ", " + this.side2 + ", " + this.side3 + "</li>");
                          return "impossible";

                        }
                    }
                };

       $('#type').text(triangle.type());

    // if (triangle.type() === "isosceles" || triangle.type() === "equilateral" || triangle.type() === "scalene") {
    //     $('#picture').show();
    //                                 //point1    //point2     //point3
    //     $('polygon').attr("points", '100,100 ' + c1 + ",100 100," + c2);
    // } else {
    //     $('#picture').hide();
    // }
    console.log(triangle.type());
    console.log(triangle.height());

  $('#result').show()
  event.preventDefault();

  });

});
