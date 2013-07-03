$(document).ready(function(){

  // AJAX!
  var response_area = $("#response");

  var do_this_before = function(){
    // Got this from http://www.ajaxload.info
    response_area.html('<img src="ajax-loader.gif" />');
  };

  var do_this_after = function(){
    response_area.text("Received response.");
  }

  var data_object = {
    name: "Sumeet",
    age: 27,
    height: 'tall'
  }

  var my_amazing_ajax_button = function(){
    $.ajax({
      // The following two lines are a 'route':
      type: "GET", // METHOD (e.g. "GET")
      url: "http://examples.webscript.io/coinflip", // ADDRESS (e.g. "/tasks/new")

      // data: data_object,

      // This runs right before the request is sent:
      beforeSend: do_this_before,

      // This runs right after the response is received.
      complete: function(response, status_text){
        console.log(response.responseText);
        console.log(status_text);
      }
    });
  };

  $("#ajax_button").on("click", my_amazing_ajax_button);

  // --------------------------------------------------------------------------
  // Drag Picard around.
  $("#picard" ).draggable();

  // --------------------------------------------------------------------------
  // Make Accordion into an accordion.
  $("#accordion").accordion();

  // --------------------------------------------------------------------------
  // Make Age a slider.

  // Set variables for elements.
  var age_header = $("#age");
  var hidden_age_field = $("<input type='hidden' id='hidden_age_field' val='' />");
  hidden_age_field.insertAfter(age_header);

  // This variable contain the slider.
  var age_slider = $("<div id='slider'></div>").insertAfter(age_header);

  age_slider.slider({
    min: 1,
    max: 6,
    value: 1, // Initial Value
    slide: function(event, slider_element) {
      hidden_age_field.val(slider_element.value);
    }
  });

  // --------------------------------------------------------------------------
  // Animate

  var animate_bio = function(){
    $("#bio").animate({
      backgroundColor: 'red'
    }, 1000);
  }

  $("#animate").on("click", animate_bio);

  // --------------------------------------------------------------------------
  // Show
  var do_a_callback = function(){
    alert("Nice moves, Picard.");
  };

  var show_picard_bouncer = function(){
    $("#picard_bouncer").show('bounce', {}, 4000, do_a_callback);
  };

  $("#show").on("click", show_picard_bouncer);
});