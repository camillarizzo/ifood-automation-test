import MainAndroidScreen from "./main.screen.android";
import MainIOSScreen from "./main.screen.ios";


export default class MainScreen{
    getMainScreen(){
        if(driver.isAndroid){
            return new MainAndroidScreen();
        }else if(driver.isIOS){
            return new MainIOSScreen();
        }
    }
}