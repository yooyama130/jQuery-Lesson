$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color', 'red');
    $('.slideup').css('background-color' , 'pink');
    $('.slideup').slideUp();
  });
});
