$(function () {
    var pathArray = window.location.pathname.split('/'),
        loc = pathArray[1],
        list = $('.list-group');

    list.find('.active').removeClass('active');
    list.find('a[href="/' + loc + '"]').addClass('active');
});