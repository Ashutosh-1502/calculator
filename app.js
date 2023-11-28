const form = document.querySelector('form');
const display = document.querySelector('.display input');
const allClear = document.querySelector('.allClear');
const cut = document.querySelector('.cut');
const equal = document.querySelector('.equal');
form.addEventListener('click',function(e){
    if(e.target.value === 'AC' || e.target.value === 'DE' || e.target.value === '='){
        // display.value = 'Invalid';
    }
    else{
        display.value += e.target.value;
    console.dir(e.target.value);
    }
})

allClear.addEventListener('click',(e)=>{
    display.value = '';
})

cut.addEventListener('click',(e)=>{
    display.value = display.value.slice(0,-1);
})

equal.addEventListener('click',(e)=>{
    display.value = eval(display.value);
})




