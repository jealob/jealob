$(document).ready(function () {
  // Add scrollspy to <body>
  const d = new Date();
  const n = d.getFullYear();
  document.getElementById("copyright").innerHTML = n;
  
  $('body').scrollspy({ target: ".navbar", offset: 74 });
  $(".nav-link").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });

  //control the navbar background and padding
  $(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
      $('.navbar').addClass('bg-dark');
      $('.fixed-top').css('padding-top', '0.5rem');

    } else {
      $('.navbar').removeClass('bg-dark');
      $('.fixed-top').css('padding-top', '3rem');
    }
  });


  $("#submit").on("click", function (event) {
    event.preventDefault();
    let message = {
      name: $("#form_name").val().trim(),
      email: $("#form_email").val().trim(),
      subject: $("#form_subject").val().trim(),
      message: $("#form_message").val().trim(),
    }
    $.ajax({
      url: "https://jealob-portfolio-dev.herokuapp.com/api/contact",
      type: "POST",
      data: message
    }).then(function (response) {
      // Show success notification modal
      if (response) {
        $(this).attr("data-target", "#alertModal");
        $('#modal-button').addClass("btn-success");
        $('#modal-title').html("Attention");
        $('#notification').html("Message was successfully submitted, thank you.");
        $('#successModal').on();
      }
      else {
        $(this).attr("data-target", "#alertModal");
        $('#modal-button').addClass("btn-danger");
        $('#modal-title').html("Warning");
        $('#notification').html("Oops, it seems there was an error. Try again.");
        $('#successModal').on();
      }
      // clear form
      $("#form_name").val("");
      $("#form_email").val("");
      $("#form_subject").val("");
      $("#form_message").val("");
    })

  })
});
