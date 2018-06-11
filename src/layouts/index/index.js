//CommonJS
require('../common.js');

//Styles
require('./index.scss');

//Slider
require('glidejs');
require('glidejs/src/sass/glide.core.scss');

$(document).ready(function() {


    $("#Glide").glide({
        type: "carousel",
        startAt: 1,
        afterInit: function(event) {
            $('#totalSlides').html(event.length);
        },
        afterTransition : function(event) {
            $('#currentSlide').html(event.index);
        }
    });

    $('.ui.sticky').sticky();

    $('.ui.accordion').accordion({
        duration: 300
    });

    $(".toggle").click(function() {
        $(this).toggleClass("expanded");
    });


});