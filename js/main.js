// var headerHeight = $('header').outerHeight();
// var urlHash = location.hash;
// if(urlHash) {
//     $('body,html').stop().scrollTop(0);
//     setTimeout(function(){
//         var target = $(urlHash);
//         var position = target.offset().top - headerHeight;
//         $('body,html').stop().animate({scrollTop:position}, 500);
//     }, 100);
// }
// $('a[href^="#"]').click(function () {
//     var href = $(this).attr("href");
//     var target = $(href);
//     var position = target.offset().top - headerHeight;
//     $('body,html').stop().animate({ scrollTop: position }, 500);
// });

const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
const urlHash = location.hash;

console.log(urlHash)

if (urlHash) {

}

// ↓target.offset().top
// var myMain = document.getElementById("main");
// var rect = myMain.getBoundingClientRect();
// var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// var myTop = rect.top + scrollTop;