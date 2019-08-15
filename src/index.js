'use strict';

/* polyfills */
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';
import  'es6-promise';
import 'formdata-polyfill';

/* modules */

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