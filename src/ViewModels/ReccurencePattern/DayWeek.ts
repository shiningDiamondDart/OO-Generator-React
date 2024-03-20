import {Model} from "../../Models/ReccurencePattern/DayWeek"
import {DaysOfWeek} from "../../Models/ReccurencePattern/DayWeek"

class ViewModel {
    private _Model: Model

    constructor(model : Model = new Model()) {
        this._Model = model
    }
    get Days() {
        return this._Model.Days
    }
    setOption(Day: string, Value: boolean) {
        const DayValue = DaysOfWeek[Day as keyof typeof DaysOfWeek]
        Value ? this._Model.DayOption |= DayValue : this._Model.DayOption -= DayValue
       
    }
    getOption(): number {
        return this._Model.DayOption
    }
    get recur(): number {
        return this._Model.Reccur
    }
    set recur(Value: number) {
        this._Model.Reccur = Value
    }

}

export {
    ViewModel,
}