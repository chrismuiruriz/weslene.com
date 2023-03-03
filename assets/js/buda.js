(function ($) {
  "use strict";

  var form = $(".contact_form"),
    message = $(".contact_msg"),
    form_data;

  // Success function
  function done_func(response) {
    message.fadeIn().removeClass("alert-danger").addClass("alert-success");
    message.text(response);

    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val("");
  }

  // fail function
  function fail_func(data) {
    message.fadeIn().removeClass("alert-success").addClass("alert-success");

    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  form.submit(function (e) {
    e.preventDefault();

    if (!e.target.name?.name || e.target.name?.email) {
      fail_func({ responseText: "Some fields are missing!" });
      return;
    }

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSfNcgnT396bX-AJQluwjUgKvMJE0X31GbYBIrKW0TuHZGf1Ag/viewform?entry.575868637=${e.target.name?.value}&entry.776210238=${e.target.company?.value}&entry.1996441654=${e.target.message?.value}&entry.1049466624=${e.target.email?.value}`;
    window.location.href = url;
  });
})(jQuery);
