const popup = () => {

    const discountBtn = document.querySelectorAll('.discount-btn'),
        discountPopup = document.querySelector('.popup-discount'),
        checkBtn = document.querySelector('.check-btn'),
        checkPopup = document.querySelector('.popup-check'),
        popup = document.querySelectorAll('.popup'),
        consultBtn = document.querySelector('.consultation-btn'),
        consultPopup = document.querySelector('.popup-consultation'),
        callMeBtn = document.querySelectorAll('.call-btn'),
        callMePopup =document.querySelector('.popup-call');

    /* закрытие попапов */
    popup.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                elem.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    elem.style.display = 'none';
                }
            }
        });
    });
    
    /* проверка на мобильные браузеры */
    function isMobile() {
        return navigator.userAgent.match(
            /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
        );
    }
    /* открытие дискаунт попапа */
    discountBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (!isMobile()) {
                discountPopup.style.top = '0';
                discountPopup.style.display = 'block';
            } else {
                discountPopup.style.display = 'block'; // TODO добавить отображение на мобильных
            }
        });
    });
    /* открытие чек попапа */
    checkBtn.addEventListener('click', () => {
        if (!isMobile()) {
            checkPopup.style.top = '0';
            checkPopup.style.display = 'block';
        } else {
            checkPopup.style.display = 'block'; // TODO добавить отображение на мобильных
        }
    });
    /* открытие попапа консультация */
    consultBtn.addEventListener('click', () => {
        if (!isMobile()) {
            consultPopup.style.top = '0';
            consultPopup.style.display = 'block';
        } else {
            consultPopup.style.display = 'block'; // TODO добавить отображение на мобильных
        }

    });

    /* попап "перезвоните мне" */
    callMeBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (!isMobile()) {
                callMePopup.style.top = '0';
                callMePopup.style.display = 'block';
            } else {
                callMePopup.style.display = 'block'; // TODO добавить отображение на мобильных
            }
        });
    });    
};

export default popup;