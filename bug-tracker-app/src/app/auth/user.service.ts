import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private _isLoggedIn = false;

    public isLoggedIn(): boolean{
        return this._isLoggedIn;
    }

    login(){
        this._isLoggedIn = true;
    }
}