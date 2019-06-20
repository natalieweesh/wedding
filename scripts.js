$(document).on("scroll", () => {
  if ($(this).scrollTop() > 700) {
    document.getElementById("scroll-to-top").className = "";
  } else {
    document.getElementById("scroll-to-top").className = "hide";
  }
});

$('a[href*="#"]').on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    500,
    "linear"
  );
});
