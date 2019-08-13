const moreBtn = () => {
    const moreBtn = document.querySelector('.add-sentence-btn'),
          hiddenCards = document.querySelector('.hidden'), 
          hiddenCard = document.querySelector('.visible-sm-block');
    /*реализовать через classList.remove и classList.add  */
    moreBtn.addEventListener('click', () => {
       
        hiddenCards.style.display = 'flex';      
        hiddenCard.style.display = 'flex';
        moreBtn.style.display = 'none';
   });

};

export default moreBtn;