const getValidUserData = () => {

    /* валидация номера телефона */
    const userPhone = document.querySelectorAll('[name=user_phone]');
    userPhone.forEach(item => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[^0-9+]/i, '');
            target.value = target.value.replace(/(.)\+/i, '$1');
        });
    });

    /* имя */
    const userName = document.querySelectorAll('[name=user_name]');

    userName.forEach(item => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яё ]/gi, '');
        });
    });
};

export default getValidUserData;