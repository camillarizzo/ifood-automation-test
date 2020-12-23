import {login} from '../constants';
const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;

const email = "teste@teste";
const password = "123";

describe("Feature login inválido", ()  => {
    allureReporter.addFeature("Feature login inválido");

    it("Deve tentar realizar um acesso com credenciais inválidas", () => {
        login.doLogin(email, password);
        assert.isTrue(login.checkMessageErrorisDisplayed());
    });
});