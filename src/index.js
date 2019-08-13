'use strict';

import popup from './modules/popup';
import sendForm from './modules/sendForm';
import getValidUserData from './modules/validation';
import moreBtn from './modules/moreBtn';
import accordion from './modules/accordion';


/* валидация */
getValidUserData();
/* всплывающие окна */
popup();
/* отправка форм на север */
sendForm();
/* кнопка "больше..." */
moreBtn();
/* раздел "частые вопросы" */
accordion();