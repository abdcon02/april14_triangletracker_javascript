$(document).ready(function() {
    "use strict";

  $('form#input').submit(function(event) {

//clears the type each time button is pressed so you can check again without refreshing page
    $('#type').empty();

    var a = $('input#side1').val();
    var b = $('input#side2').val();
    var c = $('input#side3').val();

    var triangle = {side1: a,
                    side2: b,
                    side3: c,
                    type: function(){
                        var desc_number_array = [parseInt(this.side1), parseInt(this.side2), parseInt(this.side3)].sort(function(x,y) {
                          return y-x;
                        });
                          console.log(desc_number_array);
                          console.log(desc_number_array[0]);


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

  $('#result').show()
  event.preventDefault();

  });

});
