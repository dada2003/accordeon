
 $('.accord__header').click(function () {
    $(this).next().toggle(1000);
    $('.accord__cont').not($(this).next()).slideUp(1000);

});
