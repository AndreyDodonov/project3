'use strict';

import popup from './modules/popup';
import sendForm from './modules/sendForm';
import getValidUserData from './modules/validation';
import accordion from './modules/accordion';
import addSenteceBtn from './modules/addSentenceBtn';


/* валидация */
getValidUserData();
/* всплывающие окна */
popup();
/* отправка форм на север */
sendForm();
/* раздел "частые вопросы" */
accordion();
/* кнопка больше */
addSenteceBtn();