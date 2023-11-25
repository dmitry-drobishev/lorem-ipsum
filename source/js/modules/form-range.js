const rangeValue = document.querySelector('.order__range-value span');
const inputRange = document.querySelector('.order__range-input');

const formRange = () => {
    inputRange.oninput = () => {
        let value = inputRange.value;
        rangeValue.textContent = value
      };
      
    return;
};

export {formRange};