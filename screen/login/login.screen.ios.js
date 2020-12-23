import LoginAndroidScreen from "./login.screen.android";

export default class LoginIOSScreen extends LoginAndroidScreen {
    get emailField() { return $(`-ios predicate string:${`type == 'XCUIElementTypeTextField' && name == 'email'`}`); }
    get passwordField() { return $(`-ios predicate string:${`type == 'XCUIElementTypeSecureTextField' && name == 'senha'`}`); }
    get submitButton() { return $(`-ios predicate string:${`type == 'XCUIElementTypeOther' && name == 'entrar'`}`); }
}