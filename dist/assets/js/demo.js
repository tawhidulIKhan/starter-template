$('#promo-sidebar-opner').on('click', function() {

    if ($(".promo-sidebar").hasClass('open')) {
        $("#promo").css('right', '-350px');
        $(".promo-sidebar").removeClass('open');
        $(".promo-sidebar").css('right', '-350px');

    } else {
        $("#promo").css('right', '0');
        $(".promo-sidebar").addClass('open');
        $(".promo-sidebar").css('right', '0');

    }
});