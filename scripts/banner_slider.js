backgrounds_array = ['images/галлерея/gostinnaya.jpg','images/галлерея/gostinnaya-2.jpg', 'images/галлерея/gostinnaya-3.jpg'];
slider_button_array = ['slider-controls-one','slider-controls-two','slider-controls-three'];
// setInterval(change_background, 2000);
// for(let i = 0; i < backgrounds_array.length; i++){
    // $('.banner').css('background-image', 'none');
    // setInterval(() => {
    //     $('.banner').css('background-image', 'url(images/main_banner_images/bedroom_2.jpg )');
    // }, 2000);
        
    // }
    function Rotator_cont() {

        var s = 5000;  // Время отображения

        var N = backgrounds_array.length;

        // var i=Math.round(Math.random()*(N));
        var i =-1;
        Rotator(i);

        function Rotator(i){
        i++; if( i > N - 1){i=0};//alert(i);

                $('header').css('background-image', 'url(' + backgrounds_array[i] + ')');

                $('.' + slider_button_array[i] + '').css('borderBottom', '2px solid white');
                $('.' + slider_button_array[i - 1] + '').css('borderBottom', '1px solid white');
                $('.' + slider_button_array[N.length - 1] + '').css('borderBottom', '1px solid white');

        timerId01=setTimeout(function(){Rotator(i)},s);return;}
        }
        Rotator_cont()
        

