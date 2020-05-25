
let show_more_buttons = document.querySelectorAll('.show-more');
let show_more_text = document.querySelectorAll('.show-more-text');
for( let i =0; i<show_more_buttons.length; i++){
    show_more_buttons[i].addEventListener('click',(e)=>{
        console.log(e.target);
        show_more_buttons[i].style.display = 'none';

        for (let y = 0; y < show_more_text.length; y++) {
            show_more_text[i].style.display = 'flex';
        }
    })
}
