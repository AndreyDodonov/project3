const moreBtn = () => {
    const moreBtn = document.querySelector('.add-sentence-btn'),
          hiddenCards = document.querySelector('.hidden'), 
          hiddenCard = document.querySelector('.visible-sm-block');

    moreBtn.addEventListener('click', () => {
       
        hiddenCards.style.display = 'flex';      
        hiddenCard.style.display = 'flex';
        moreBtn.style.display = 'none';
   });

};

export default moreBtn;