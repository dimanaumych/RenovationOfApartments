let button_info = document.querySelectorAll('.button-info');
let portfolio_card = document.querySelector('.portfolio-card-wrapper');
let slider_images_element = document.querySelectorAll('.portfolio-card-slider-image');
let slider_count_element = document.querySelectorAll('.slider-count');

for (let i = 0; i < button_info.length; i++){
    button_info[i].addEventListener('click',()=>{
        portfolio_card.style.display ='flex';
    })
}
// for(let i =2; i < slider_images_element.length; i--) {
$('.portfolio-card-slider-images img').click(function(e){
    var src = $(this).attr('src');
    // console.log(src);
    $('.portfolio-card-slider-main-image img').attr('src', src);
    // slider_images_element[i].addEventListener('click', (e) => {

        if(e.target.id == 1){
            for(let i = 0; i < slider_count_element.length; i++){
                slider_count_element[0].style.borderBottom ='2px solid black';
                slider_count_element[1].style.borderBottom ='1px solid black';
                slider_count_element[2].style.borderBottom ='1px solid black';
            }
        }
        else if(e.target.id == 2){
            for(let i = 0; i < slider_count_element.length; i++){
                slider_count_element[1].style.borderBottom ='2px solid black';
                slider_count_element[0].style.borderBottom ='1px solid black';
                slider_count_element[2].style.borderBottom ='1px solid black';
            }
        }
        else if(e.target.id == 3){
            for(let i = 0; i < slider_count_element.length; i++){
                slider_count_element[2].style.borderBottom ='2px solid black';
                slider_count_element[0].style.borderBottom ='1px solid black';
                slider_count_element[1].style.borderBottom ='1px solid black';
            }
        }
    // });

});

let cancel_button = document.querySelector('.cancel-portfolio');
cancel_button.addEventListener('click',()=>{
    portfolio_card.style.display ='none';
});

