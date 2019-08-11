'use strict';

import popup from './modules/popup';
import sendForm from './modules/sendForm';
import getValidUserData from './modules/validation';


/* валидация */
getValidUserData();
/* всплывающие окна */
popup();
/* отправка форм на север */
sendForm();