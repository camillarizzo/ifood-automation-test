
export default class LoginAndroidScreen  {
    get emailField() { return $("~email") ;}
    get passwordField() { return $("~senha");}
    get errorMsg() { return $("~lognFail");}
    get submitButton() { return $(`android=${'new UiSelector().text("Entrar").className("android.widget.TextView")'}`); }

    setAccountNumber(email) {
        this.emailField.waitForDisplayed();
        this.emailField.click();
        this.emailField.setValue(email);
    }

    setPassword(password) {
        this.passwordField.waitForDisplayed();
        this.passwordField.click();
        this.passwordField.setValue(password);
    }

    doLogin(email, password){
        this.setAccountNumber(email)
        this.setPassword(password)
        this.submitButton.waitForDisplayed();
        this.submitButton.click();
    }
    checkMessageErrorisDisplayed(){
        this.errorMsg.waitForDisplayed();
        return this.errorMsg.isDisplayed();
    }
}
