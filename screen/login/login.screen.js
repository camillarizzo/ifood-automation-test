import LoginAndroidScreen from "./login.screen.android";
import LoginIOSScreen from "./login.screen.ios";

export default class LoginScreen{
    getLoginScreen(){
        if(driver.isAndroid){
            return new LoginAndroidScreen();
        }else if(driver.isIOS){
            return new LoginIOSScreen();
        }
    }
}