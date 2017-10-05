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

});