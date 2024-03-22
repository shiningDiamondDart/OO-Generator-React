import CronExpression from "../Cron";

class Model {
    Day: number
    Recur: number

    constructor() {
        this.Day = 1
        this.Recur =1
    }

    UpdateCron(CurrentCron: CronExpression) {
        CurrentCron.Month.Step = this.Recur
        CurrentCron.DayOfMonth.Value = this.Day.toString()
        return CurrentCron
    }
}

export {
    Model,
}