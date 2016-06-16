$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.smooth").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, 'easeInOutCubic', function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// Video & Overlay
var myVideo = document.getElementById("jsVideo");
var playing = false;

function toggleOverlay() {
    $('.overlay').fadeToggle();
    if(playing) {
        myVideo.pause();
    }
    else {
        myVideo.play();
    }
    playing = !playing;
}

// Email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function sendMail() {
    var data = {
        email: $("#form_email").val(),
        message: $("#form_msg").val()
    };

    if(validateEmail(data.email) && data.message.length) {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: data,
            success: function(){
                $('.jsForm').hide();
                $('.jsThanks').show();
            }
        });
    }
    else {
        console.log("error");
    }
}
