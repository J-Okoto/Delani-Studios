$(document).ready(function() {
$("form#form34A").submit(function(event) {

          var name = $("input#MERGE1").val();
          var email = $("input#MERGE0").val();
          var message = $("textarea#comment").val();
          if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert (name + ", we have received your message. Thank you for submitting your details.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });

});
