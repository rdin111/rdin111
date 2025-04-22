$(document).ready(function(){
    $(".thumb").click(function(){
      const src = $(this).attr("src");
      const caption = $(this).data("caption");
      $("#slideshow-image").attr("src", src);
      $("#caption").text(caption);
    });
  });
  