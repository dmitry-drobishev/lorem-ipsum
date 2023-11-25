import {iosVhFix} from './utils/ios-vh-fix';
import {mobileMenu} from './modules/modals/menu';
import {formSelect} from './modules/form-select';
import {formRange} from './modules/form-range';
import { formFile } from './modules/form-file';

mobileMenu();

formSelect();

formRange();

formFile();

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

});


// ---------------------------------

