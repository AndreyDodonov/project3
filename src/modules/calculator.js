const calculator = () => {
let calcResult = document.querySelector('#calc-result'),
    firstSwitch = document.querySelector('#myonoffswitch'),
    body = {};
    



    


    firstSwitch.addEventListener('change', () => {
        
        if (firstSwitch.checked) {
            console.log('firstSwitch: ', firstSwitch.checked);
            //скрываем второй колодец
            //записываем в объект body на второй колодец нули  
        } else {
            console.log('firstSwitch: ', firstSwitch.checked);
            //записываем в объект показания в body со второго колодца
        }
        // записываем данные с первого колодца        
});

    secondSwitch.addEventListener('change', () => {
        //записываем в бади "дно : 1000"
        // или 0 если анчекед

    });
   


    




};

export default calculator;