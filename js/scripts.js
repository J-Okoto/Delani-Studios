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
  

  $(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#work1").hover(function(){
      $("#overlay1").show();
      });

});
