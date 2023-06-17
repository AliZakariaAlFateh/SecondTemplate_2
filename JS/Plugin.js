/* globla $,jQuery,alert,console*/
$(document).ready(function () {
           "use strict";
  
          // The document page (body) Nice Scroll
          $("html").niceScroll();
          // $("html").getNiceScroll().resize();
          /*
          $("#selector").niceScroll({
              // options here
            });
            // Get nicescroll object
            $("#selector").getNiceScroll();
            // Hide scrollbar
            $("#selector").getNiceScroll().hide();
            // Check for scrollbars resize
            $("#selector").getNiceScroll().resize();

            // Scroll to a position:
            $("#selector").getNiceScroll(0).doScrollLeft(x, duration);// Scroll X Axis
            $("#selector").getNiceScroll(0).doScrollTop(y, duration);// Scroll Y Axis
            */
          /* Smooth move to the carousel  */
          $(".carousel").carousel({
            /* 3 seconds to move the next pictures */
            interval:3000
          });


          // to move between sections 

          //the InnerHeight return the all height was done by padding or height any thing
          var Offset_of_First_Section_ByInnerHeigth= $('.navbar').innerHeight()
          window.console.log(Offset_of_First_Section_ByInnerHeigth);
          $('.navbar').css('height',Offset_of_First_Section_ByInnerHeigth)
          // $('.Carousel_Section').css('paddingTop',Offset_of_First_Section_ByInnerHeigth)
          // window.console.log($('#navbar-actual').innerHeight()) 
          var lengthOfAncor=$('#MoveSections > li > a').length
          var ancorDirectChiled=$('#MoveSections > li > a')
          $('#MoveSections > li > a').click(function (e) {
              e.preventDefault()
              var move=$(this).text();

              /*  background for selected section from nav bar   */
              /*(Shif + Alt + A ) or (Alt + Shift + A ) To make comment block*/
/*               for(var i=0;i<lengthOfAncor;i++)
              {
                //$('#MoveSections > li > a').removeClass("selected")
                 ancorDirectChiled.eq(i).removeClass("selected")
              }
              var checkClass=$(this).hasClass("selected")
              if(checkClass==true)
              {
                $(this).removeClass("selected")
              }else{
                // alert(checkClass)
                // alert(lengthOfAncor)
                // alert($(this).index())
                $(this).addClass("selected")
              } */
               


              window.console.log(move);
                    $('html,body').animate({
                        scrollTop:$('#'+$(this).text()).offset().top - Offset_of_First_Section_ByInnerHeigth
                        
                    },1000);
                    
                    // $(".navbar-inverse .navbar-nav > li > a").focus();
                    // $(":focus").css({"background-color":"#00f","color":"#fff"});
                    // $(' .navbar-inverse .navbar-nav > li > a').css({"background-color":"#00f","color":"#fff"})
                    //this code is done but its saved the focused 
                    // $(' .navbar-inverse .navbar-nav > li > a:focus').css({"background-color":"#00f","color":"#fff"})
                    // $(' .navbar-inverse .navbar-nav > li > a').focus(function(){
                    //   $this().css({"background-color":"#00f","color":"#fff"})
                    // })         
          });


          // gear options color Toggle to show and hide the gear
          $(".gear-check").click(function () {
            $('.Option-Color').fadeToggle();
          })

          var ListItems=$(".Option-Color ul li")
          // ListItems.eq(0).css("background-color","#ff0000").end()
          // .eq(1).css("background-color","#00ff1d").end()
          // .eq(2).css("background-color","#0895D1").end()
          // .eq(3).css("background-color","#ff8600");
          //With Camel Case
          //i can clored the list with nth , firstchild in csss
          ListItems.eq(0).css("backgroundColor","#ff0000").end()
          .eq(1).css("backgroundColor","#00ff1d").end()
          .eq(2).css("backgroundColor","#0895D1").end()
          .eq(3).css("backgroundColor","#ff8600");
          ListItems.click(function () {
            $("link[href*='Them']").attr("href",$(this).attr("Data-Value"))
            // $("link[href*='Them']").remove()
            // window.console.log($(this).attr("Data-Value"))
          })



          // Code For Loading Page 
          // Note the function   window.load is not work
          $(window).on('load', function () {
            
            $(".Loading_page .sk-cube-grid").fadeOut(2000,function(){
              
              $("body").css("overflow","auto")
              $(this).parent().fadeOut(2000,function () {
                //Show Scroll
                
                // remove the section Loading_page
                 $(this).remove()
              })
            })
          });

       /*
       $(window).on('scroll', function (){
            window.console.log($(this).scrollTop())
       }) 
       */
      // Scroll top hide show
      var ScrollButn= $("#Scroll-Top")
      $(window).scroll( function (){
        // console.log($(this).scrollTop())
        /*
        if($(this).scrollTop() >= 550)
        {
          // ScrollButn.css("display","block")
          ScrollButn.show()
        }
        else{
          // ScrollButn.css("display","none")
          ScrollButn.hide()
        }
        */
        // Summrize If conndition this is better
       ($(this).scrollTop() >= 550)?ScrollButn.show(500):ScrollButn.hide(500)

      })

     // Scroll top move to up
    ScrollButn.on("click",function () {
    $("html,body").animate({scrollTop:0},2000)
     })
       
        





});