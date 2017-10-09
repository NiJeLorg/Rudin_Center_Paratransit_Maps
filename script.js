$(function() {
    //wait for carto to finish loading
    setTimeout(function() {
        $('.legend').show();
    }, 3000);

    // set up listener for show legend button and show the legend when clicked
    $('.showLegend').click(function() {
        $('.legend').show();
        $('.showLegend').hide();
    });

    $('.hideLegend').click(function() {
        $('.legend').hide();
        $('.showLegend').show();
    });

    // scroll legend to the right wehn right chevron is clicked
    var scrollPixels = 430;
    $(".chevron-right-fade").click(function(e){
        var leftPos = $('.legend').scrollLeft();
        $('.legend').animate({scrollLeft: leftPos + scrollPixels }, 800);
        // $(".chevron-left-fade").show();
        // if ($('.legendSVG').width() < (leftPos + scrollPixels  + $('.legend').width())) {
        //     $(".chevron-right-fade").hide();
        // }
    });  

    // change color of chevronon hover
    $(".chevron-right-fade").hover(function(e){
        $('.chevron-right-wrapper').toggleClass('hover');
    });

    // scroll legend to the left when left chevron is clicked
    $(".chevron-left-fade").click(function(e){
        var leftPos = $('.legend').scrollLeft();
        $('.legend').animate({scrollLeft: leftPos - scrollPixels }, 800);
        // $(".chevron-right-fade").show();
        // if ((leftPos - scrollPixels ) <= 0) {
        //     $(".chevron-left-fade").hide();
        // }
    });  

    // change color of chevronon hover
    $(".chevron-left-fade").hover(function(e){
        $('.chevron-left-wrapper').toggleClass('hover');
    });

    // listen for scrolling
    $('.legend').scroll(function() {
        var leftPos = $('.legend').scrollLeft();
        if (leftPos <= 0) {
            $(".chevron-left-fade").hide();
        } else {
            $(".chevron-left-fade").show();
        }

        if ($('.legendSVG').width() < (leftPos + $('.legend').width())) {
            $(".chevron-right-fade").hide();
        } else {
            $(".chevron-right-fade").show();
        }
    });

});