
let show_more_buttons = document.querySelectorAll('.show-more');
let show_more_text = document.querySelectorAll('.show-more-text');
// let
for( let i =0; i<show_more_buttons.length; i++){
    show_more_buttons[i].addEventListener('click',(e)=>{
        console.log(e.target);
        show_more_buttons[i].style.display = 'none';
        console.log(window.innerWidth);
        if(window.innerWidth <=1024 || window.innerWidth < 768){
            console.log('DONE');
            if (i == 0) {
                document.querySelector('.remont-types-block-wrapper-one').style.height = '980px';
            } else if (i == 1) {
                document.querySelector('.remont-types-block-wrapper-two').style.height = '1430px'
            } else if (i == 2) {
                document.querySelector('.remont-types-block-wrapper-three').style.height = '1200px'
            }
        }
        else {
            console.log('ERROR');
            if (i == 0) {
                document.querySelector('.remont-types-block-wrapper-one').style.height = '800px';
            } else if (i == 1) {
                document.querySelector('.remont-types-block-wrapper-two').style.height = '1100px'
            } else if (i == 2) {
                document.querySelector('.remont-types-block-wrapper-three').style.height = '970px'
            }
        }

        for (let y = 0; y < show_more_text.length; y++) {
            show_more_text[i].style.display = 'flex';
        }
    })
}


