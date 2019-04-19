
$(document).ready(function(){

  $(".fadein").each(function() {
    $(this).delay(200).animate({"opacity": "1"}, 800);
  });
});
