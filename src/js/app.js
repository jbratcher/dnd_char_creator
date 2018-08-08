// Help bootstrap change active class of menu item
$('#charTabs a').on('click', function () {
    $('#charTabs').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});
