const constructor = () => {
    const construct = document.querySelector('.constructor'),
        panelHeading = construct.querySelectorAll('.panel-heading'),
        panelCollapse = construct.querySelectorAll('.panel-collapse'),
        constructBtn = construct.querySelectorAll('.construct-btn');

    for (let i = 0; i < panelHeading.length; i++) {
        panelHeading[i].addEventListener('click', () => {
            panelCollapse.forEach((item) => {
                item.classList.remove('in');
            });
            panelCollapse[i].classList.add('in');
        });
        
        constructBtn[i].addEventListener('click', () => {
            panelCollapse.forEach((item) => {
                item.classList.remove('in');
            });            
            panelCollapse[i + 1].classList.add('in');
        });
    }
};

export default constructor;