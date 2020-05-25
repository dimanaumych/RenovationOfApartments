function isVisible() {

    let coords = document.querySelector('.about-company-numbers').getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    // верхний край элемента виден?
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    // нижний край элемента виден?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    console.log(topVisible + ' :topvisible \n' + bottomVisible + ' :bottmvisible');
    return topVisible || bottomVisible;
}
let f = true;
function showVisible() {
    if (isVisible()) {
        f = false;
        // let first_number = document.querySelector('#first-number-block');
        // let second_number = document.querySelector('#second-number-block');
        // let third_number = document.querySelector('#third-number-block');
        var currentNumber = 0;

        $({numberValue: currentNumber}).animate({numberValue: 15}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#first-number-block').text(Math.ceil(this.numberValue));
            }
        });
        $({numberValue: currentNumber}).animate({numberValue: 248}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#second-number-block').text(Math.ceil(this.numberValue));
            }
        });
        $({numberValue: currentNumber}).animate({numberValue: 79}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#third-number-block').text(Math.ceil(this.numberValue));
            }
        });


    }
    else{
        $('#first-number-block').text(0);
        $('#second-number-block').text(0);
        $('#third-number-block').text(0);
    }


}

showVisible();
window.onscroll = function (){
    if(!f) return;
    showVisible();
}