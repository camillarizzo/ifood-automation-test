import {login, main} from '../constants';
import Actions from "../core/helpers/actions";
import {registerStudent} from '../core/helpers/data';
const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;

const email = "teste@teste.com";
const password = "123456";
const cod = Actions.generateRandomNumber(1, 10);
const codeStudent = registerStudent[cod].code;
const nameStudent = registerStudent[cod].name;

describe("Feature cadasto de estudante", ()  => {
    allureReporter.addFeature("Feature cadasto de estudante");

    it("Deve cadastrar um estudante", () => {
        login.doLogin(email, password);
        assert.isTrue(main.checkCodTitleisDisplayed());
        assert.isTrue(main.checkStudentTitleisDisplayed());
        main.insertNewStudent(codeStudent, nameStudent);
        assert.isTrue(main.checkSuccessMessageisDisplayed());
        main.checkSuccessStudentRegister(codeStudent);
        main.doLogout();
    });
});