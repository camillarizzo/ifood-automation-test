import LoginScreen from "./screen/login/login.screen";
import MainScreen from "./screen/main/main.screen";

export const login = new LoginScreen().getLoginScreen();
export const main = new MainScreen().getMainScreen();