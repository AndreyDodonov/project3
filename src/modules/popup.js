const popup = () => {

    const discountBtn = document.querySelectorAll('.discount-btn'),
        discountPopup = document.querySelector('.popup-discount'),
        checkBtn = document.querySelector('.check-btn'),
        checkPopup = document.querySelector('.popup-check'),
        popup = document.querySelectorAll('.popup');

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


};


export default popup;