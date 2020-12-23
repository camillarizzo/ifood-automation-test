
export default class Actions {

    static scrollByText(text){
        return $(`android=${'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("' + text + '"))'}`);
    }
    static scrollByContentDesc(contentDesc){
        return $(`android=${'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("'+ contentDesc +'"))'}`);
    }
    static scrollByClass(className, text){
        return $(`android=${'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("'+ text +'").className("'+ className +'"))'}`);
    }
    static swipeUpIOS(){
        browser.execute('mobile: swipe', {direction: 'up'});
    }
    static swipeDownIOS(){
        browser.execute('mobile: swipe', {direction: 'down'});
    }
    static clickKeyboardOKButton(){
        var okButton = $(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name CONTAINS 'OK'`}`);
        okButton.waitForDisplayed();
        okButton.click();
    }
    static generateRandomNumber(min, max){
        var randomNum = Math.random() * (max-min + 1) + min;
        return Math.floor(randomNum);
    }
}