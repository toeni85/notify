$(function(){
   var $clientcarousel = $('#carousel-list');
   var clients = $clientcarousel.children().length;
   var clientwidth = (clients * 54);
   $clientcarousel.css('width',clientwidth);
   
   var rotating = true;
   var clientspeed = 0;
   var seeclients = setInterval(rotateClients, clientspeed);
   
   $(document).on({
     mouseenter: function(){
       rotating = false;
     },
     mouseleave: function(){
       rotating = true;
     }
   }, '#carousel');
   
   function rotateClients() {
     if(rotating != false) {
      var $first = $('#carousel-list li:first');
      $('#carousel-list li').after($first);
      $first.animate({ 'margin-left': '-54px' }, 1000, "linear", function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#carousel-list li:last').after($first);
      });
     }
   }
 });
 