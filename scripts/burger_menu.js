$('.menu-btn').on('click', function(e) {

    // e.preventDefault();
    // $('.left_sidebar').toggleClass('menu_active');
    document.querySelector('.left_sidebar').classList.toggle('menu_active')
    $('.main_content').toggleClass('content_active');
    $('.menu-btn').css("display","none");
})
$('.cancel-btn').on('click', function(e) {
    e.preventDefault();

    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    setTimeout(()=>{
        $('.menu-btn').css("display","flex");
    }, 280)

});
$('.codrops-demos_sidebar a').on('click', (e)=>{
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    setTimeout(()=>{
        $('.menu-btn').css("display","flex");
    }, 280)
})