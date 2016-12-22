$(document).ready(function() {
     //$(".background").css('cursor','url(img/crosshairs.png),auto'); 
     
//start game
     $(".play-icon").click(function(){
          alienFlip();
     });
// animations for targets
     function alienFlip(){
     var x= Math.random() * 555;
     $('alien-flip').fadeIn();
     $('.alien-flip').css({"left": "0px", "top": x});
     $('.alien-flip').animate({left: '1000px'}, 10000, alienFlip);}
//target click
     $('.alien-flip').click(function(){
     console.log("clicked");
     $('.alien-flip').stop().fadeOut();
     });


// top nav-bar and start menu
     $(".hamburger").click(function(){
          $(".start-menu").show();
          $(".rules-content").show();
     });
     $(".close").click(function(){
          $(".start-menu").hide();
          $(".rules-content").hide();
     });
     $(".rules-button").click(function(){
          $(".rules-content").show();
     });
     $(".highscores-button").click(function(){
          $(".rules-content").hide();
     }); 

//start flashing stars function
     function blink() {
          $(".star-1").fadeOut("slow", function() {
               $(".star-1").fadeIn("slow", function() {
                    $('.star-2').fadeOut("fast", function() {
                         $('.star-2').fadeIn("slow", function() {
                              $('.star-3').fadeOut("slow", function() {
                                   $('.star-3').fadeIn("slow", function() {
                                        $('.star-4').fadeOut("fast", function() {
                                             $('.star-4').fadeIn("fast", function() {
                                                  $('.star-5').fadeOut("slow", function() {
                                                       $('.star-5').fadeIn("slow", function() {
                                                            $('.star-6').fadeIn("slow", function() {
                                                                 $('.star-6').fadeIn("slow", function() {
                                                                      $('.star-7').fadeIn("slow", function() {
                                                                           $('.star-7').fadeIn("slow", function() {
                                                                                $('.star-8').fadeIn("slow", function() {
                                                                                     $('.star-8').fadeIn("slow", function() {
                                                                                          blink();
                                                                                     });
                                                                                });
                                                                           });
                                                                      });
                                                                 });
                                                            });
                                                       });
                                                  });
                                             });
                                        });
                                   });
                              });
                         });
                    });
               });
          });
     }
     blink();
});
