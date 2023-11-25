
const formSelect = () => {
    
    document.querySelector('.order__form-select-button').addEventListener('click', function () {
        
        document.querySelector('.order__form-select-list').classList.toggle('order__form-select-list--show');
        
        document.querySelectorAll('.order__form-select-item').forEach( function (listItem) {
            listItem.addEventListener('click', function () {
                document.querySelector('.order__form-select-button').innerText = this.innerText;
                document.querySelector('.order__form-select-list').classList.remove('order__form-select-list--show');
                document.querySelector('.order__form-select').value = this.dataset.value;
            });
        })
    });
}

export {formSelect};