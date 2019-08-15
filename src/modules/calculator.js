const calculator = () => {
const calcResult = document.querySelector('#calc-result'),
    firstSwitch = document.querySelector('#myonoffswitch'),
    secondSwitch = document.querySelector('#myonoffswitch-two'),
    secondTankCalc = document.querySelector('.second-tanc-section');
    

let body = {
    countTanks:1
},
    result = 10000;  
    
    calcResult.value = result;

    /* обработка свитчей, подсчёт итогово суммы, запись в объект body */
    firstSwitch.addEventListener('change', () => {
        
        if (firstSwitch.checked) {            
            secondTankCalc.classList.add('hidden');
            result = 10000;
        } else {
            secondTankCalc.classList.remove('hidden'); 
            result = 15000;
        }
        calcResult.value = result;
                
    });

    secondSwitch.addEventListener('change', () => {
        //записываем в бади "дно : 1000"
        // или 0 если анчекед

    });
   


    

    /* вывод в результат расчёта */
    calcResult.value = result;

};

export default calculator;