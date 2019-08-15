'use strict';

import popup from './modules/popup';
import sendForm from './modules/sendForm';
import getValidUserData from './modules/validation';
import accordion from './modules/accordion';
import addSenteceBtn from './modules/addSentenceBtn';
import constructor from './modules/constructor';
import calculator from './modules/calculator';


/* валидация */
getValidUserData();
/* всплывающие окна */
popup();
/* раздел "частые вопросы" */
accordion();
/* кнопка больше */
addSenteceBtn();
/* конструктор */
constructor();
/* калькулятор */
calculator();
/* отправка форм на север */
sendForm(calculator());