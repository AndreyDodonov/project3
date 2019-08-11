const popup = () => {
    
const popupDialog = document.querySelector('.popup-dialog'),
      popupBtn = document.querySelectorAll('.button'),

      discountBtn = document.querySelectorAll('.discount-btn'),
      discountPopup = document.querySelector('.popup-discount');

    /* закрытие попапов */
    popupDialog.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('.popup-close')) {
            popupDialog.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupDialog.style.display = 'none';
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