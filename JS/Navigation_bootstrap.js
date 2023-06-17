/*global console,$*/
$(function()
{
    'use strict';
    
     //the InnerHeight return the all height was done by padding or height any thing
     var Offset_of_First_Section_ByInnerHeigth= $('.navbar').innerHeight()
     window.console.log(Offset_of_First_Section_ByInnerHeigth);
     $('.navbar').css('height',Offset_of_First_Section_ByInnerHeigth)
     // $('.Carousel_Section').css('paddingTop',Offset_of_First_Section_ByInnerHeigth)
     // window.console.log($('#navbar-actual').innerHeight()) 
     $('#MoveSections > li > a').click(function(e)
     {
          e.preventDefault()
          var move=$(this).text();
          window.console.log(move);
               $('html,body').animate({
                    scrollTop:$('#'+$(this).text()).offset().top - Offset_of_First_Section_ByInnerHeigth
                  
               },1000);
               
     });
  
  
  });