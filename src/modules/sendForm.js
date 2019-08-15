const sendForm = (obj) => {

    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы с вами свяжемся',

        consultForm = document.querySelector('.main-form'),
        captureForm = document.querySelector('.capture-form'),
        popupCaptureForm = document.querySelector('#popup-call-form'),
        popupCheckForm = document.querySelector('#popup-check'),
        callMePopup = document.querySelector('#popup-call-form'),
        popupConsult = document.querySelector('#consult-form'),
        directorForm = document.querySelector('.director-form'),
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    let form,
        inputUserQuest = document.querySelector('input[name ="user_quest"]');

    document.body.addEventListener('submit', (event) => {
        if (event.target === directorForm) {
            form = popupConsult;
        }
        if (event.target === consultForm) {
            form = consultForm;
        }
        if (event.target === callMePopup) {
            form = callMePopup;
        }
        if (event.target === popupCheckForm) {
            form = popupCheckForm;
        }
        if (event.target === popupCaptureForm) {
            form = popupCaptureForm;
        }
        if (event.target === captureForm) {
            form = captureForm;
        }
        if (event.target === popupConsult) {
            form = popupConsult;
        }

        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        let body = {};
        for (let val of formData.entries()) {
            body[val[0]] = val[1];
        }

        if (inputUserQuest.value) {
            body.userQuest = inputUserQuest.value;
            inputUserQuest.value = '';
        }

        if (form === popupCaptureForm) {
        let calcStore = obj;
        Object.assign(body, calcStore);
        }

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                const inputs = document.querySelectorAll('input');
                const textarea = document.querySelectorAll('textarea');
                inputs.forEach(item => {
                    item.value = '';
                });
                textarea.forEach(item => {
                    item.value = '';
                });
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });

    });
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};



export default sendForm;