let button_info = document.querySelectorAll('.button-info');
let portfolio_card = document.querySelector('.portfolio-card-wrapper');
let slider_images_element = document.querySelectorAll('.portfolio-card-slider-image');
let slider_count_element = document.querySelectorAll('.slider-count');
let show_more_button = document.querySelector('.remont-types-button-portfolio');

let project_name_array = ['Вторичка1', 'Новострой2','Вторичка3', 'Новострой4','Вторичка5', 'Новострой6','Вторичка7', 'Новострой8','Вторичк9', 'Новострой10','Вторичка11', 'Новострой12'];
let project_name = document.querySelectorAll('.project-name');
let project_area_array = [183, 65, 98, 76, 62, 75, 111, 29, 50, 80, 43, 39];
let project_area = document.querySelectorAll('.project-area');

let images_for_card_array = ['"images/галлерея/1.png"', '"images/галлерея/2.png"', '"images/галлерея/3.png"']
let images_for_card =  document.querySelectorAll('#portfolio-card-slider-main-image');
// FOR PORTFOLIO CARDS
for (let x = 0; x < project_name.length; x++) {
    for (let i = 0; i < project_name_array.length; i++) {
        project_name[x].innerHTML = project_name_array[x];
    }
}
for (let x = 0; x < project_area.length; x++) {
    for (let i = 0; i < project_area_array.length; i++) {
        project_area[x].innerHTML = project_area_array[x] + ' м²';
    }
}

// FOR PORTFOLIO CARD!
console.log(images_for_card)









for (let i = 0; i < button_info.length; i++){
    button_info[i].addEventListener('click',()=>{
        portfolio_card.style.display ='flex';
    })


}

$('.portfolio-card-slider-images img').click(function(e){
    var src = $(this).attr('src');
    $('.portfolio-card-slider-main-image img').attr('src', src);
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
});

let cancel_button = document.querySelector('.cancel-portfolio');
cancel_button.addEventListener('click',()=>{
    portfolio_card.style.display ='none';
});

show_more_button.addEventListener('click', ()=>{
    console.log('click');
    document.querySelector('.show-more-card').style.display = 'flex';
    show_more_button.style.display = 'none';
});

let card_show_more = document.querySelector('.card');
console.log(card_show_more);
