let button_info = document.querySelectorAll('.button-info');
let portfolio_card = document.querySelector('.portfolio-card-wrapper');
let slider_images_element = document.querySelectorAll('.portfolio-card-slider-image');
let slider_count_element = document.querySelectorAll('.slider-count');
let show_more_button = document.querySelector('.remont-types-button-portfolio');

let project_name_array = ['Вторичка1', 'Новострой2','Вторичка3', 'Новострой4','Вторичка5', 'Новострой6','Вторичка7', 'Новострой8','Вторичк9', 'Новострой10','Вторичка11', 'Новострой12'];
let project_name = document.querySelectorAll('.project-name');
let project_area_array = [185, 65, 98, 76, 62, 75, 111, 29, 50, 80, 43, 39];
let project_area = document.querySelectorAll('.project-area');
// let project_price_array = ['140 000', '240 000', '340 000', '440 000', '210 000', '222 000', '85 000', '328 000', '110 000', '90 000', '70 000', '40 000'];
// let card_price = document.querySelectorAll('.portfolio-card-price');
//
// let card_room_size = document.querySelectorAll('.portfolio-card-room-size');
// let card_title = document.querySelectorAll('.portfolio-card-title');
// let card_title_remont_type_array = ['Новостройка1', 'Вторичка2','Новостройка2', 'Вторичка3','Новостройка3', 'Вторичка4','Новостройка4', 'Вторичка5','Новостройка5', 'Вторичка5','Новостройка6', 'Вторичка6'];
// let card__title_remont_type = document.querySelectorAll('.portfolio-card-title-remont-type');
// let card_description_array =['Задача организации, в особенности же реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что начало повседневной работы по формированию позиции способствует подготовки и реализации модели развития.','Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание соответствующий условий активизации. Равным образом сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.','Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности позволяет оценить значение дальнейших направлений развития. Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Равным образом укрепление и развитие структуры представляет собой интересный эксперимент проверки модели развития.','Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.','Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. С другой стороны начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации.','Равным образом, современная методология разработки напрямую зависит от модели развития. Не следует, однако, забывать, что курс на социально-ориентированный национальный проект обеспечивает широкому кругу (специалистов) участие в формировании приоритизации разума над эмоциями.','Как принято считать, действия представителей оппозиции призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы. Ясность нашей позиции очевидна: выбранный нами инновационный путь требует определения и уточнения приоритизации разума над эмоциями.','И нет сомнений, что базовые сценарии поведения пользователей представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ограничены исключительно образом мышления. Не следует, однако, забывать, что современная методология разработки позволяет выполнить важные задания по разработке модели развития.','Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит','Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.', 'Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'];
// let card_description = document.querySelectorAll('.portfolio-card-text');
//
// let images_for_card_array = [
//     "images/галлерея/1.png","images/галлерея/1_2.jpg","images/галлерея/1_3.jpg",
//     "images/галлерея/2.png","images/галлерея/2_2.jpg","images/галлерея/2_3.jpg",
//     "images/галлерея/3.png","images/галлерея/3_2.jpg","images/галлерея/3_3.jpg",
//     "images/галлерея/4.png","images/галлерея/4_2.jpg","images/галлерея/4_3.jpg",
//     "images/галлерея/5.png","images/галлерея/5_2.jpg","images/галлерея/5_3.jpg",
//     "images/галлерея/6.png","images/галлерея/6_2.jpg","images/галлерея/6_3.jpg",
//     "images/галлерея/7.png","images/галлерея/7_2.jpg","images/галлерея/7_3.jpg",
//     "images/галлерея/8.png","images/галлерея/8_2.jpg","images/галлерея/8_3.jpg",
//     "images/галлерея/9.png","images/галлерея/9_2.jpg","images/галлерея/9_3.jpg",
//     "images/галлерея/1.png","images/галлерея/10_2.jpg","images/галлерея/10_3.jpg",
//     "images/галлерея/2.png","images/галлерея/11_2.jpg","images/галлерея/11_3.jpg",
//     "images/галлерея/3.png","images/галлерея/12_2.jpg","images/галлерея/12_3.jpg"
// ];
// let card_slider_images = document.querySelectorAll('.portfolio-card-slider-image');

// for (let j = 0; j <images_for_card_array.length; j++) {
//     // console.log(images_for_card_array[j]);
//     for(let n = 0; n < images_for_card_array.length; n++) {
//         console.log(images_for_card_array[j][n] + 'test');
//     }
// }






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
for (let i = 0; i < button_info.length; i++) {
    button_info[i].addEventListener('click', () => {
        i++;
        let str = '#portfolio-card-wrapper-' + i;

        document.querySelector(str).style.display = 'flex';
        // document.querySelector('#portfolio-card-wrapper-1').style.display = 'flex';
    })
}
// console.log('test1');
//     let first_wrapper_card = document.querySelector('#portfolio-card-wrapper-1');
//         first_wrapper_card.addEventListener('click', () => {
//             console.log(first_wrapper_card);
//             first_wrapper_card.style.display = 'flex';
//     })
//
// document.querySelector('#portfolio-card-wrapper-2').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-3').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-4').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-5').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-6').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-7').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-8').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-9').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-10').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-11').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })
// document.querySelector('#portfolio-card-wrapper-12').addEventListener('click', () => {
//     portfolio_card.style.display = 'flex';
// })










// for (let i = 0; i < button_info.length; i++){
//     button_info[i].addEventListener('click',()=>{
//         portfolio_card.style.display ='flex';
//         // ROOM SIZE
//         for (let r = 0; r < card_room_size.length; r++) {
//                 card_room_size[r].innerHTML = project_area_array[i] + ' м2';
//         }
//         // PORTFOLIO-CARD-PRICE
//         for (let r = 0; r < card_price.length; r++) {
//
//                 card_price[r].innerHTML = project_price_array[i] + ' грн';
//
//         }
//         // PORTFOLIO-CARD-TITLE
//         for (let r = 0; r < card_title.length; r++) {
//                 card_title[r].innerHTML = project_name_array[i];
//         }
//         // PORTFOLIO-CARD-TITLE-REMONT-TYPE
//         for (let r = 0; r < card__title_remont_type.length; r++) {
//                 card__title_remont_type[r].innerHTML = '/'+card_title_remont_type_array[i];
//         }
//         // PORTFOLIO-CARD-TEXT
//         for (let r = 0; r < card_description.length; r++) {
//                 card_description[r].innerHTML = card_description_array[i];
//         }
//         // // PORTFOLIO-CARD-SLIDER-IMAGES
//         // for (let r = 0; r < card_slider_images.length; r++) {
//         //     for(let j = 0; j < images_for_card_array.length; j++) {
//         //         for(let n = 0; n < images_for_card_array.length+1; n++) {
//         //             console.log(images_for_card_array[j][n])
//         //             card_slider_images[r].src = images_for_card_array[j][n];
//         //         }
//         //     }
//         // }
//         // PORTFOLIO-CARD-SLIDER-IMAGES
//         // for (let r = 0; r < card_slider_images.length; r++) {
//             for (let r = 0; r < card_slider_images.length; r+=3) {
//                 console.log(card_slider_images.length);
//                 console.log(images_for_card_array[r]);
//                 card_slider_images[r].src = images_for_card_array[i];
//                 // i += 1
//             }
//         // }
//     })
// ]
let slider_count_one_array = document.querySelectorAll('.slider-count-one');
let slider_count_two_array = document.querySelectorAll('.slider-count-two');
let slider_count_three_array = document.querySelectorAll('.slider-count-three');



$('.portfolio-card-slider-images img').click(function(e){
    var src = $(this).attr('src');
    $('.portfolio-card-slider-main-image img').attr('src', src);

        if(e.target.className == 'portfolio-card-slider-image-one'){
            for (let i = 0; i < slider_count_one_array.length; i++) {
                slider_count_one_array[i].style.borderBottom = '2px solid black';
            }
            for (let i = 0; i < slider_count_two_array.length; i++) {
                slider_count_two_array[i].style.borderBottom = '1px solid black';
            }
            for (let i = 0; i < slider_count_three_array.length; i++) {
                slider_count_three_array[i].style.borderBottom = '1px solid black';
            }

        }
        else if(e.target.className == 'portfolio-card-slider-image-two') {
            for (let i = 0; i < slider_count_one_array.length; i++) {
                slider_count_one_array[i].style.borderBottom = '1px solid black';
            }
            for (let i = 0; i < slider_count_two_array.length; i++) {
                slider_count_two_array[i].style.borderBottom = '2px solid black';
            }
            for (let i = 0; i < slider_count_three_array.length; i++) {
                slider_count_three_array[i].style.borderBottom = '1px solid black';
            }
        }

        else if(e.target.className == 'portfolio-card-slider-image-three') {
            for (let i = 0; i < slider_count_one_array.length; i++) {
                slider_count_one_array[i].style.borderBottom = '1px solid black';
            }
            for (let i = 0; i < slider_count_two_array.length; i++) {
                slider_count_two_array[i].style.borderBottom = '1px solid black';
            }
            for (let i = 0; i < slider_count_three_array.length; i++) {
                slider_count_three_array[i].style.borderBottom = '2px solid black';
            }
        }
});


// CLOSE PORTFOLIO CARD
let cancel_button = document.querySelectorAll('.cancel-portfolio');

// let portfolio_card_wrapper = document.querySelectorAll('.portfolio-card-wrapper');
for( let i=0; i < cancel_button.length; i++) {
    cancel_button[i].addEventListener('click', () => {
        // console.log(cancel_button.length)
        // for(let x = 0; x < portfolio_card[x]; x++) {
        //     // console.log(cancel_button.length)
        //     // let str = '#portfolio-card-wrapper-' + i;
        //     // document.querySelector(str).style.display = 'none';
            document.querySelector('#portfolio-card-wrapper-1').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-2').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-3').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-4').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-5').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-6').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-7').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-8').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-9').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-10').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-11').style.display = 'none';
        document.querySelector('#portfolio-card-wrapper-12').style.display = 'none';
    });
}


// SHOW ADDITIONAL 3 BLOCKS
show_more_button.addEventListener('click', ()=>{
    // console.log('click');
    document.querySelector('.show-more-card').style.display = 'flex';
    show_more_button.style.display = 'none';
});

let card_show_more = document.querySelector('.card');
// console.log(card_show_more);
