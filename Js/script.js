$(document).ready(function(){
   fade();
   fadeWorks();
});





function fade(){
  $(".welcome").hide().fadeIn(3000);
    $(".welcome").fadeOut("fast", function(){
      $(".freelance").fadeIn(3000).removeClass("hidden")

    });
}

function fadeWorks(){
  $("freelancer2").fadeIn(3000).removeClass("hidden");

}
