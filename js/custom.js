function closeNav(){ 
    $("#side-bar").animate({ left: "-=213" }, 300);
    $("#open-nav").toggle();
    $("#close-nav").toggle();
    $("#main-logo").toggleClass( "show-logo");
}
function openNav(){  
    
    $("#side-bar").animate({ left: "+=213" }, 300)
    $("#open-nav").toggle();
    $("#close-nav").toggle();
    $("#main-logo").toggleClass( "show-logo");
}
$(document).ready(function() {
    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
});

$(document).ready(function() {
        $("#main-content").addClass($section)});
        document.title = $sectionTitle;

// GALLERY
// SCROLL SPY FOR MORE-INFO

window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset >= 1000) {
    $('#more-info-btn').addClass('btn-hide');
    $('#tour-btn').addClass('btn-show');
  }else{
    $('#more-info-btn').removeClass('btn-hide');
    $('#tour-btn').removeClass('btn-show');
  }
}