const popup = () => {
    
const popupDialog = document.querySelector('.popup-dialog'),
      popupBtn = document.querySelectorAll('.button');

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

    /* открытие попапов */
    function isMobile() {
        return navigator.userAgent.match(
            /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
        );
    }

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (!isMobile()) {
                popupDialog.style.top = '-100%';
                popupDialog.style.display = 'block';                
            } else {
                popupDialog.style.display = 'block';
            }
        });
    });

   

};


export default popup;