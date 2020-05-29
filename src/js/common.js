var navWidth = $(".nav-box").innerWidth();
// SWAP MENU
  $("#js-btn_nav").on("click", function(){
    $(this).fadeOut(450);
    $(this).addClass("btn-nav_active");
    $(".nav-box").animate({right: "0", top: "0"}, 550);
    $("body").addClass("body-overflow");
  });
  
  $("#js-nav_close").on("click", function(){
    $("#js-btn_nav").fadeIn(450);
    $("#js-btn_nav").removeClass("btn-nav_active");
    $(".nav-box").animate({right: -navWidth }, 550);
  });

  $(document).mouseup(function (e){ 
    var navWidth = $(".nav-box").innerWidth();
    var block = $(".nav-box"); 
        if (!block.is(e.target) 
          && block.has(e.target).length === 0) {
            $("#js-btn_nav").fadeIn(450);
            $("#js-btn_nav").removeClass("btn-nav_active");
            $(".nav-box").animate({right: -navWidth }, 550);
          }
  });
// SWAP MENU END


// SLIDER
$(".technology-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:false,
    draggable:false,
    pauseOnHover:false,
    fade:true
});
// SLIDER END

// HEADET TOP FIXED
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $(".header-top").addClass("header-top_fixed");
    }else if($(this).scrollTop() == 0) {
      $(".header-top").removeClass("header-top_fixed");
    }else{
      return false;
    }
  });
// HEADET TOP FIXED END

// SKILLS STATUS BAR
     $(window).scroll(function(){
       var offsetSkills = 200;
       var scrolltop = $(this).scrollTop();
         if(scrolltop >= $(".skills").offset().top - offsetSkills) {
          animateElement();
          $(".skill-val").fadeIn(500);
         }else{
           return false;
         }
         $(window).off('scroll')
     });
  
    function animateElement(){
      $(".skill-val__line").each(function(){
        // ANIMATE NUMBER
        var element = $(this);
        var elementValue = $(this).attr("data-value");
        var elementNumber = parseInt(elementValue);
        var i = 0;
        setInterval(function(){
            if(i <= elementNumber){
              $(element).text(i + "%");
              i++;
            }
        }, 35);
        // ANIMATE LINE WIDTH
        $(this).animate({width: elementValue},1000);
        $(this).addClass("skill-val__line_active");
      });
    }
// SKILLS STATUS BAR END


// POP-UP
  function casePopUp(e){
    $(e).fadeIn(750);
    $(".case-page").niceScroll();
    $("body").addClass("body-overflow");
    
  }
  
  $(".popUp-close").on("click", function(){
    $(".popUp-wrp").fadeOut(750);
    $(".case-page").niceScroll().remove();
    $("body").removeClass("body-overflow");
   
  });
  
  $(document).mouseup(function (e){ 
    var popUpBlock = $(".popUp-content"); 
        if (!popUpBlock.is(e.target) 
          && popUpBlock.has(e.target).length === 0) {
            $(".popUp-wrp").fadeOut(750);
            $(".case-page").niceScroll().remove();
            $("body").removeClass("body-overflow");
            
          }
  });
// POP-UP END

// NEXT CASE

  function nextCase(){
     if($(window).width() > 992){
      var lengthCase = $(".case-item:visible").length;
      var visibleCase = 3;
      for (var i = 0; i < lengthCase; i++){
        $(".case-item").eq(visibleCase++).fadeIn();
        if(visibleCase == $(".case-item").length){
            $(".btn-next").fadeOut();
            break;
          }
      }
     }else{
        var lengthCase = $(".case-item:visible").length;
        var visibleCase = 2;
        for (var i = 0; i < lengthCase; i++){
          $(".case-item").eq(visibleCase++).fadeIn();
          if(visibleCase == $(".case-item").length){
              $(".btn-next").fadeOut();
              break;
            }
        }
     }
  };
// NEXT CASE END


// SCROOL SHOW
function scrollShow(e){
  var offset = $(".header-top").innerHeight();
  $(".nav-box").animate({right: -navWidth}, 550);
  $("html,body").animate({scrollTop: $(e).offset().top - offset}, 1000);
  $("#js-btn_nav").removeClass("btn-nav_active");
  $("#js-btn_nav").fadeIn(550);
}
// PRELOADER	
$(window).on("load", function(){
   setTimeout(function() {
     $(".preloader-box").fadeOut("slow");
   }, 1500);
 });
// PRELOADER END  
 
