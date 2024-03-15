import Model from '../Models/Time'

class ViewModel {
    private _Model: Model
    constructor() {
        this._Model = new Model()
    }
    get StartTime(): string {
        return this._Model.StartTime.getTime().toString();
    }
    set StartTime(StartTime: string) {
        this._Model.StartTime = new Date(StartTime);
    }
    get EndTime(): string {
        return this._Model.EndTime.getTime().toString();
    }
    set EndTime(EndTime: string) {
       this._Model.EndTime = new Date(EndTime);
    }
    
}

export default ViewModel