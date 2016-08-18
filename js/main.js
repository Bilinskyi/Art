
$(document).ready(function(){

$("form").submit(function(e) {

    var ref = $(this).find("[required]");

    $(ref).each(function(){
        if ( $(this).val() == '' )
        {
            alert("Заполните поле");

            $(this).focus();

            e.preventDefault();
            return false;
        }
    });  return true;
});


    $("a.modal-form").fancybox({
       'hideOnContentClick': true,
          minWidth : 230,
          padding : 0,
          closeBtn : true
 
 });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });

//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

});