const modal = document.getElementById('modal');

document.getElementById('openModal').addEventListener('click', () => {

    modal.classList.add('open');
});


document.getElementById('closeModal').addEventListener('click', () => {

    modal.classList.remove('open');
});