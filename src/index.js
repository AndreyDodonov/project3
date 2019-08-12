'use strict';

import popup from './modules/popup';
import sendForm from './modules/sendForm';
import getValidUserData from './modules/validation';
import moreBtn from './modules/moreBtn';


/* валидация */
getValidUserData();
/* всплывающие окна */
popup();
/* отправка форм на север */
sendForm();
/* кнопка "больше..." */
moreBtn();