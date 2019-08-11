const popup = () => {

    const popupClose = document.querySelectorAll('.popup-close'),
        discountBtn = document.querySelectorAll('.discount-btn'),
        discountPopup = document.querySelector('.popup-discount');

    /* закрытие попапов */
    discountPopup.addEventListener('click', (event) => {
        let target = event.target;
        if (target === popupClose) {
            discountPopup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                discountPopup.style.display = 'none';
            }
        }
    });

    /* открытие дискаунт попапа */
    function isMobile() {
        return navigator.userAgent.match(
            /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
        );
    }

    discountBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (!isMobile()) {
                discountPopup.style.top = '0';
                discountPopup.style.display = 'block';
            } else {
                discountPopup.style.display = 'block';
            }
        });
    });



};


export default popup;