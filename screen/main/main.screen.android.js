import Actions from "../../core/helpers/actions";

export default class MainAndroidScreen {
    get codField(){ return $("~codigo");}
    get codTitle(){ return $(`android=${'new UiSelector().text("Código").className("android.widget.TextView")'}`); }
    get studentField(){ return $("~aluno");}
    get studentTitle(){ return $(`android=${'new UiSelector().text("Aluno").className("android.widget.TextView")'}`); }
    get saveButton(){ return $(`android=${'new UiSelector().text("Salvar").className("android.widget.TextView")'}`); }
    get cancelButton(){ return $(`android=${'new UiSelector().text("Cancelar!").className("android.widget.TextView")'}`); }
    set registerField(cod){ this._registerField = $('~'+cod+'');}
    get registerField(){return this._registerField;}
    get successMsg(){ return $(`android=${'new UiSelector().text("Dados salvos!").className("android.widget.TextView")'}`); }
    get errorMsg(){ return $(`android=${'new UiSelector().text("Os campos devem ser preenchidos!").className("android.widget.TextView")'}`); }
    get okButton(){ return $(`android=${'new UiSelector().text("OK").className("android.widget.Button")'}`); }
    get logoutButton(){ return $("//android.view.ViewGroup[@content-desc='logout']/android.widget.TextView"); }

    checkCodTitleisDisplayed(){
        this.codTitle.waitForDisplayed();
        return this.codTitle.isDisplayed();
    }
    checkStudentTitleisDisplayed(){
        this.studentTitle.waitForDisplayed();
        return this.studentTitle.isDisplayed();
    }
    insertNewStudent(cod,name){
        this.codField.waitForDisplayed();
        this.codField.setValue(cod);
        this.studentField.isDisplayed();
        this.studentField.setValue(name);
        this.saveButton.isDisplayed();
        this.saveButton.click();
    }
    checkSuccessMessageisDisplayed(){
        this.successMsg.waitForDisplayed();
        return this.successMsg.isDisplayed();
    }
    checkErrorMessageisDisplayed(){
        this.errorMsg.waitForDisplayed();
        return this.errorMsg.isDisplayed();
    }
    checkSuccessStudentRegister(cod){
        this.registerField = cod;
        Actions.scrollByText(cod);
        this.registerField.waitForDisplayed();
        return this.registerField.isDisplayed();
    }
    exitMessageError(){
        this.errorMsg.isDisplayed();
        this.okButton.waitForDisplayed();
        this.okButton.click();
    }
    doLogout(){
        this.logoutButton.isDisplayed();
        this.logoutButton.click();
    }
}