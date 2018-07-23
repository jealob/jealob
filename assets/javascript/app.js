// Add scrollspy to <body>
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

$(function () {
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    let message = = {
      name: $("#form_name").data("location"),
      email: $("#form_email").val().trim(),
      subject: $("#form_subject").val().trim().,
      message: $("#form_message").val().trim();
    }

    $.ajax("/contact", {
      type: "POST",
      data: message
    }).then(function () {

    })
  })
});