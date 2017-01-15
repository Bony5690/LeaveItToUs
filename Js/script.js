

// $(document).ready(function(){
//    fadeInOut();
//
// });


$(function () {
    var $element = $('.welcome');
    var $element2 = $('.freelance');

    function fadeInOut () {
        $element.fadeIn(1000, function () {
            $element.fadeOut(1500, function () {
                $element2.fadeIn(1500).removeClass('hidden');
                $element2.fadeOut(1500);
                setTimeout(fadeInOut, '4000');

                });
              });
  // });
}

    fadeInOut();
});

// $(function () {
//     var $element = $('.welcome');
//     var $element2 = $('.freelance');
//     function fadeInOut () {
//         $element.fadeIn(1000, function () {
//             $element.fadeOut(1500, function () {
//              $element2.fadeIn(1500).removeClass(function(){
//                 $element2.fadeOut(1500, function(){
//                    setTimeout(fadeInOut, 500);
//                 });
//               });
//             });
//         });
//     }
//
//     fadeInOut();
// });
//
//


// function fade(){
//
//     $(".welcome").hide().fadeIn(3000);
//       $(".welcome").fadeOut("fast", function(){
//         $("freelance").hide().fadeIn(3000, function(){
//           setTimeout(fade, 500);
//         });
//
//
//
//       });
//
//       }



//       function fade(){
//
//           $(".welcome").hide().fadeIn(3000);
//           $(".welcome").fadeOut("fast", function(){
//             $(".freelance").fadeIn(3000);
//           // setTimeout(fade, 500);
//
//         });
// }
// function fadeWorks(){
//   $("freelancer2").fadeIn(3000).removeClass("hidden");
//
// }
