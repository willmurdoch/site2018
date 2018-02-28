$('.desktop').click(function(){
  $(this).removeClass('out').toggleClass('in').siblings().toggleClass('out').removeClass('in');
});
$('.mobile').click(function(){
  $(this).removeClass('out').toggleClass('in').siblings().toggleClass('out').removeClass('in');
});

function setCircles(){
  $('.circle').each(function(){
    var mySpot = $(this).parents('.project').offset().top - $(window).scrollTop();
    mySpot = mySpot/5;
    $(this).css('top', 'calc(50% - '+mySpot+'px)');
    if($(window).width() > 800){
      $(this).siblings('.textWrap').css('transform', 'translateY('+mySpot/2+'px)');
      $(this).siblings('.imageWrap').find('.mobile img, .mobile div').css('transform', 'translateY('+mySpot+'px)');
      $(this).siblings('.imageWrap').find('.desktop img, .desktop div').css('transform', 'translateY('+mySpot/3+'px)');
    }
  });
}

$(document).ready(function(){
  setCircles();
});

$(window).scroll(function(){
  setCircles();
});
