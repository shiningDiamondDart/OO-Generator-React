import { Model } from '../../Models/ReccurencePattern/Selection'
import {Options} from '../../Models/ReccurencePattern/Selection'

class ViewModel {
    private _Model: Model;

    constructor() {
        console.log("new selection viewmodel")
        this._Model = new Model();
    }

    get HideDaily(): boolean {
        return (this._Model.Option & Options.Daily) < 1;
    }
    set HideDaily(Hide: boolean) {
        Hide ? this._Model.Option = Options.None : this._Model.Option = Options.Daily;
        console.log("asdghnaksdhg");
    }
    get HideWeekly(): boolean {
        return (this._Model.Option & Options.Weekly) < 1;
    }
    set HideWeekly(Hide: boolean) {
        Hide ? this._Model.Option == Options.None : this._Model.Option = Options.Weekly;
    }
    get HideMonthly(): boolean {
        return (this._Model.Option & Options.Monthly) < 1;
    }
    set HideMonthly(Hide: boolean) {
        Hide ? this._Model.Option = Options.None : this._Model.Option = Options.Monthly;
    }
    get HideYearly(): boolean {
        return (this._Model.Option & Options.Yearly) < 1;
    }
    set HideYearly(Hide: boolean) {
        Hide ? this._Model.Option = Options.None : this._Model.Option = Options.Yearly;
    }
    
}

export default ViewModel;