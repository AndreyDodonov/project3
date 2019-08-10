const popupWindow = () => {
    
    const consultationBtn = document.querySelector('.consultation-btn'),
          consultationWindow = document.querySelector('.popup-consultation');

    const showPopup = () => {
        consultationWindow.style.display = 'block';
    };

    consultationBtn.addEventListener('click', showPopup);

   

};


export default popupWindow;