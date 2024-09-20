const loadmore = document.querySelector('.load-more');
let currentItems = 3;

loadmore.addEventListener('click', (e) => {

    const elementList = [...document.querySelectorAll('.post li')];

    e.target.classList.add('show-loader');

    for (let i = currentItems; i < currentItems + 3; i++) {
        setTimeout(() => {
            e.target.classList.remove('show-loader');
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 3000);
    }
    
    currentItems += 3;

    if(currentItems > elementList.length) {
        e.target.classList.add('loaded');
    }

});