import CronExpression from "../Cron";

class Model {
    Recur: number
    Weekday: boolean
    constructor() {
        this.Weekday = false
    }
    UpdateCron(CurrentCron: CronExpression) {
        if (this.Weekday) {
            CurrentCron.DayOfWeek.Value = "1-5"
        } else {
            CurrentCron.DayOfMonth.Step = this.Recur
        }
        

    }
}
export {
    Model,
}