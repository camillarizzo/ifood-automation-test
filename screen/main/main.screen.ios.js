import MainAndroidScreen from "./main.screen.android";
import Actions from "../../core/helpers/actions";

export default class MainIOSScreen extends MainAndroidScreen{
    get codField(){ return $(`-ios predicate string:${`type == 'XCUIElementTypeTextField' && label == 'codigo'`}`); }
    get codTitle(){ return $(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name == 'Código'`}`); }
    get studentField(){ return $(`-ios predicate string:${`label == "aluno" AND name == "RNE__Input__text-input"`}`); }
    get studentTitle(){ return $(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name == 'Aluno'`}`); }
    get saveButton(){ return $("~salvar"); }
    get cancelButton(){ return $("~cancelar"); }
    set registerField(cod){ this._registerField = $(`-ios predicate string:${`type == 'XCUIElementTypeOther' && name == '`+cod+"'"}`); }
    get registerField(){return this._registerField;}
    get successMsg(){ return $(`-ios predicate string:${`type == 'XCUIElementTypeOther' && name == 'Salvo Dados salvos!'`}`); }
    get errorMsg(){ return  $(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name == 'Os campos devem ser preenchidos!'`}`); }
    get logoutButton(){ return $("~logout"); }

    checkSuccessStudentRegister(cod){
        this.registerField = cod;
        Actions.swipeUpIOS();
        this.registerField.waitForDisplayed();
        return this.registerField.isDisplayed();
    }
}