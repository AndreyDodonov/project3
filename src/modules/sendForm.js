const sendForm = () => {

    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы с вами свяжемся',
        consultForm = document.querySelector('.main-form'),
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    let form;

    document.body.addEventListener('submit', (event) => {
        if (event.target === consultForm) {
            form = consultForm;
        }


        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        let body = {};
        for (let val of formData.entries()) {
            body[val[0]] = val[1];
        }

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
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