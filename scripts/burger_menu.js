$('.menu-btn').on('click', function(e) {
    console.log('test');
    // e.preventDefault();
    // $('.left_sidebar').toggleClass('menu_active');
    document.querySelector('.left_sidebar').classList.toggle('menu_active')
    $('.main_content').toggleClass('content_active');
    $('.menu-btn').css("display","none");
})
$('.cancel-btn').on('click', function(e) {
    e.preventDefault();
    console.log('CANCEL_BUTTON');
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    setTimeout(()=>{
        $('.menu-btn').css("display","flex");
    }, 280)

});