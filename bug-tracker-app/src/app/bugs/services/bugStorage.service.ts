import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";

@Injectable({
    providedIn: 'root'
})
export class BugStorageService{
    private storage : Storage = window.localStorage;
    private _currentBugId : number = 0;

    getAll() : Bug[] {
        let bugs : Bug[] = [];
        for(let index=0; index < this.storage.length; index++){
        let key = this.storage.key(index) || '',
            data = this.storage.getItem(key) || '',
            bug = JSON.parse(data);
            bugs.push(bug);
            this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id;
        }
        return bugs;
    }

    save(bug : Bug) {
        if (bug.id === 0){
            bug.id = ++this._currentBugId;
        }
        this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
    }

    remove(bug : Bug) : void {
        this.storage.removeItem(bug.id.toString());
    }

}