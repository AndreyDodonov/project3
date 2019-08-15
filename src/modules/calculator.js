const calculator = () => {
    const calcBlock = document.getElementById('accordion'),
        myonoffswitchCheck = document.getElementById('myonoffswitch'),
        selectBox = document.querySelectorAll('.constructor .select-box select'),
        myonoffswitchCheckTwo = document.getElementById('myonoffswitch-two'),
        collapseFourInput = document.querySelector('#collapseFour input'),
        calcResult = document.getElementById('calc-result'),
        titleTwoSump = document.querySelectorAll('.title-text'),
        selectTwoSump = document.querySelectorAll('.select-box'),
        secondTankSection = document.querySelector('.second-tank-section');

    let total = 0,
        newTotal = 0;

    let calcStore = {
        storageBox: 'Однокамерный',
        firstSump: ['1.4 метра', '1 штука'],
        secondSump: [],
        bilge: 'Есть',
        distance: 0,
        cost: 0
    };
    /* значение по умолчанию */
    if (myonoffswitchCheck.checked === true) {
        secondTankSection.classList.add('hidden');
        total = 10000;
    }
    /* первый свитч */
    myonoffswitchCheck.addEventListener('change', (event) => {
        if (myonoffswitchCheck.checked === true) {
            secondTankSection.classList.add('hidden');

            total = 10000;

            calcStore.storageBox = 'Однокамерный';
            calcStore.secondSump = [];

        } else if (myonoffswitchCheck.checked === false) {
            secondTankSection.classList.remove('hidden');

            total = 15000;

            calcStore.storageBox = 'Двухкамерный';
            calcStore.secondSump = ['1.4 метра', '1 штука'];
        }
    });

    const countSum = (target) => {
        const diamValue = selectBox[0].options[selectBox[0].selectedIndex].value,
            ringsValue = selectBox[1].options[selectBox[1].selectedIndex].value,
            diamTwoValue = selectBox[2].options[selectBox[2].selectedIndex].value,
            ringsTwoValue = selectBox[3].options[selectBox[3].selectedIndex].value;

        if (total === 10000) {
            total = total * diamValue * ringsValue;
            newTotal = total;
            total = 10000;

            if (!myonoffswitchCheckTwo.checked) {
                newTotal -= 1000;
            }

        } else if (total === 15000) {
            total = total * diamValue * ringsValue * diamTwoValue * ringsTwoValue;
            newTotal = total;
            total = 15000;

            if (!myonoffswitchCheckTwo.checked) {
                newTotal -= 2000;
            }
        }
        calcResult.value = newTotal;

        calcStore.cost = newTotal;
        calcStore.distance = +collapseFourInput.value;
 
        if (myonoffswitchCheckTwo.checked) {
            calcStore.bilge = 'Есть';
        } else if (!myonoffswitchCheckTwo.checked) {
            calcStore.bilge = 'Нет';
        }

        for (let i = 0; i < 2; i++) {
            calcStore.firstSump[i] = selectBox[i].options[selectBox[i].selectedIndex].textContent;
        }

        if (calcStore.secondSump.length > 0) {
            for (let i = 2; i < 4; i++) {
                calcStore.secondSump[i - 2] = selectBox[i].options[selectBox[i].selectedIndex].textContent;
            }
        }
    };

    calcBlock.addEventListener('change', (event) => {
        let target = event.target;
        if (target.matches('#myonoffswitch') || target.matches('.constructor .select-box select') ||
            target.matches('#myonoffswitch-two') || target.matches('#collapseFour input')) {
            countSum(target);
        }
    });
    return calcStore;
};


export default calculator;