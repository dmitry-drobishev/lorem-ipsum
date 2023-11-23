import {iosVhFix} from './utils/ios-vh-fix';
import {mobileMenu} from './modules/modals/menu';
import {formSelect} from './modules/form-select';

mobileMenu();

formSelect();

const rangeValue = document.querySelector('.order__range-value span');
const inputRange = document.querySelector('.order_range-input');

inputRange.oninput = function () {
  let value = inputRange.value;
  rangeValue.textContent = value
}

// const userTelInput = document.querySelector('.booking__form-item--tel input');
// userTelInput.addEventListener('input', userTelHandler);

// const userCheckboxInput = document.querySelector('.booking__checkbox input');
// userCheckboxInput.addEventListener('click', userCheckboxHandler);

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
