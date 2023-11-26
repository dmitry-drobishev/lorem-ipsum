const input = document.querySelector('.order__form-input-file');
const label = document.querySelector('.order__form-label-file');

const formFile = function () {

    input.addEventListener('change', function() {
        label.querySelector('.order__form-label-file span').textContent = 'файл прикреплен';
    })
};

export {formFile};
