$(document).ready(function () {
  var headerH = document.getElementsByTagName("header")[0].clientHeight;
  $("a").on("click", function (e) {
    if (this.hash !== "" && this.hash !== "#carouselExampleCaptions") {
      e.preventDefault();
      var hash = this.hash;
      var scroll = $(hash).offset().top - headerH;
      $("html, body").animate(
        {
          scrollTop: scroll,
        },
        800,
        function () {
          window.location.hash = hash;
          $("html").animate({ scrollTop: scroll }, 0);
        }
      );
    }
  });
});
