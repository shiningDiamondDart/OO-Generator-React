import { Model } from "../../Models/ReccurencePattern/Day"

class ViewModel {
    private _Model: Model

    constructor(model: Model = new Model()) {
        this._Model = model
    }
    get Recur() {
        return this._Model.Recur
    }
    set Recur(value: number) {
        this._Model.Recur = value
    }
    get Weekday() {
        return this._Model.Weekday
    }
    set Weekday(value: boolean) {
        this._Model.Weekday = value
    }
}
export {
    ViewModel,
}