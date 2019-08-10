const popupConsultWindow = () => {
    
    const consultationBtn = document.querySelector('.consultation-btn'),
          consultationWindow = document.querySelector('.popup-consultation'),
          closeBtn = document.querySelector('.popup-close');

    const showPopup = () => {
        consultationWindow.style.display = 'block';
    };

    const closePopup= () => {
        consultationWindow.style.display = 'none';
    }

    consultationBtn.addEventListener('click', showPopup);
    closeBtn.addEventListener('click', closePopup);

   

};


export default popupConsultWindow;