const selectButton = document.querySelector('.order__form-select-button');
const selectElements = document.querySelectorAll('.order__form-select-item a');
const selectElementsList = document.querySelector('.order__form-select-list');
const selectValue = document.querySelector('.order__form-select');

const formSelect = () => {
    
    selectButton.addEventListener('click', function () {
        
        selectElementsList.classList.toggle('order__form-select-list--show');
        
        selectElements.forEach( function (listItem) {
            listItem.addEventListener('click', function () {
                selectButton.innerText = this.innerText;
                selectElementsList.classList.remove('order__form-select-list--show');
                selectValue.value = this.dataset.value;
            });
        })
    });
}

export {formSelect};