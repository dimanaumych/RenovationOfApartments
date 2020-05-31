let building_type = document.querySelectorAll('[name=building-type]');
let remont_type = document.querySelectorAll('[name=remont-type');
let rooms_type = document.querySelectorAll('[name=rooms-type');
let room_size = document.querySelector('.room-size-input');
let room_size_button = document.querySelector('.room-size-input-button');
let price = document.querySelector('.remont-price-text');
let deadline = document.querySelector('.deadlines-text');

let result_price = 0;
let result_deadline = 0;

room_size_button.addEventListener('click',function(){
    result_price = 0;
    result_deadline = 0;
    for (var i = 0; i < building_type.length; i++) {
        if (building_type[i].checked) {
            console.log(building_type[i].value);
            break;
        }
    }
    for (var x = 0; x < remont_type.length; x++) {
        if (remont_type[x].checked) {
            console.log(remont_type[x].value);
            break;
        }
    }
    for (var y = 0; y < rooms_type.length; y++) {
        if (rooms_type[y].checked) {
            console.log(rooms_type[y].value);
            break;
        }
    }
    console.log(room_size.value);

    // ONLY NUMBERS
    $('.room-size-input').on('keyup', function(){
        $(this).val($(this).val().replace (/\D/, ''));
    });

    if(building_type[i].value === 'old' && (rooms_type[y].value === 'flat' || rooms_type[y].value === 'cottage')){

        if(remont_type[x].value === 'cosmetic'){
            result_price = room_size.value * 2000;
        }
        if(remont_type[x].value === 'capital'){
            result_price = room_size.value * 3500;
        }
        if(remont_type[x].value === 'euro'){
            result_price = room_size.value * 5000;
        }
    }

    if(building_type[i].value === 'new' && (rooms_type[y].value === 'flat' || rooms_type[y].value === 'cottage')){

        if(remont_type[x].value === 'cosmetic'){
            result_price = room_size.value * 1500;
        }
        if(remont_type[x].value === 'capital'){
            result_price = room_size.value * 3000;
        }
        if(remont_type[x].value === 'euro'){
            result_price = room_size.value * 4500;
        }
    }

    if((building_type[i].value === 'new' || building_type[i].value === 'old') && (rooms_type[y].value === 'office' || rooms_type[y].value === 'commercial')){

        if(remont_type[x].value === 'cosmetic'){
            result_price = room_size.value * 1000;
        }
        if(remont_type[x].value === 'capital'){
            result_price = room_size.value * 2000;
        }
        if(remont_type[x].value === 'euro'){
            result_price = room_size.value * 3200;
        }
    }

    if (room_size.value >= 0 && room_size.value <= 19 ){
        result_deadline = 'До ' + 30;
    }
    if (room_size.value >= 20 && room_size.value <= 34 ){
        result_deadline = 30;
    }
    //
    else if(room_size.value >= 35 && room_size.value <= 49){
        result_deadline = 50;
    }
    else if(room_size.value >= 50 && room_size.value <= 74){
        result_deadline = 60;
    }
    else if(room_size.value >= 75 && room_size.value <= 99){
        result_deadline = 90;
    }
    else if(room_size.value >= 100){
        result_deadline = 'От ' + 90;
    }

    price.innerHTML = result_price + ' грн';
    deadline.innerHTML = result_deadline + ' дней';
});
