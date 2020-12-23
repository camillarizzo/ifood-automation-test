import {login, main} from '../constants';
const assert = require('chai').assert;
const allureReporter = require('@wdio/allure-reporter').default

const email = "teste@teste.com";
const password = "123456";
const codeStudent = "";
const nameStudent = "";

describe("Feature cadasto de estudante", ()  => {
    allureReporter.addFeature("Feature cadasto de estudante");

    it("Deve clicar em salvar com campos vazios", () => {
        login.doLogin(email, password);
        assert.isTrue(main.checkCodTitleisDisplayed());
        assert.isTrue(main.checkStudentTitleisDisplayed());
        main.insertNewStudent(codeStudent, nameStudent);
        assert.isTrue(main.checkErrorMessageisDisplayed());
    });
});