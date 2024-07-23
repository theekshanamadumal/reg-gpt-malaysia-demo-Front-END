import { UserModel } from "src/app/core/models/user.model";
import { AppConstant } from "../app-constants/app-constants";

export const getLoggedInUser = (): UserModel => {
    const user: UserModel = JSON.parse(localStorage.getItem(AppConstant.User));
    return user;
}

export const saveUser = (user: UserModel): void => {
    localStorage.setItem(AppConstant.User, JSON.stringify(user));
}

export const clearUser = (): void => {
    localStorage.removeItem(AppConstant.User);
}

export const isLoggedIn = (): boolean => {
    const user = localStorage.getItem(AppConstant.User);
    if(user){
        return true;
    }
    return false;
} 