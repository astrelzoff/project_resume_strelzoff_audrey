// Document ready function
$(document).ready(function () {
    // select image, add event listener on mouse enter
    $('img').on('mouseenter', function () {
        // On mouse enter, add the class jazzy from the nearest image
        $(this).closest('img').addClass('jazzy');
    });
    // on mouse leave, remove the class jazzy from the nearest image
    $('img').on('mouseleave', function () {
        $(this).closest('img').removeClass('jazzy');
    });
    //call sticky plug-in
    $('#sticker').sticky({topSpacing: 0});
    //call Tooltipster plug-in
    $('.tooltip').tooltipster({
        theme: 'tooltipster-noir'
    });
});
