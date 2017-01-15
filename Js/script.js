$(function () {
    var $element = $('.welcome');
    var $element2 = $('.freelance');
    var $element3 = $('.freelancer2');

    function fadeInOut () {
        $element.fadeIn(1000, function () {
            $element.fadeOut(1500, function () {
                $element2.fadeIn(1500).removeClass('hidden');
                $element2.fadeOut(1500, function(){
                  $element3.fadeIn(1500).removeClass('hidden');
                  $element3.fadeOut(1500, function(){
                      setTimeout(fadeInOut, '1000');
                  })

                });



                });
              });
  // });
}

    fadeInOut();
});
