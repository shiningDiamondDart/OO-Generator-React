import { Model } from "../../Models/ReccurencePattern/Month"

class ViewModel {
    private _Model: Model

    constructor(model: Model = new Model()) {
        this._Model = model
    }
    get Day() {
        return this._Model.Day
    }
    set Day(value: number) {
        this._Model.Day = value
    }
    get Recur() {
        return this._Model.Day
    }
    set Recur(value: number) {
        this._Model.Recur = value
    }


}

export {
    ViewModel,
}