import CronExpression from "./Cron";

class Model {
    StartTime: Date;
    EndTime: Date;

    constructor() {
        this.StartTime = new Date();
        this.StartTime.setMinutes(0); this.StartTime.setSeconds(0); this.StartTime.setHours(9);

        this.EndTime = new Date();
        this.EndTime.setMinutes(0); this.EndTime.setSeconds(0); this.EndTime.setHours(0);
    }

    SetCron(CurrentCron: CronExpression) {
        CurrentCron.Minute.Value = this.StartTime.getMinutes().toString();
        CurrentCron.Hour.Value = this.StartTime.getHours().toString();

        if (this.EndTime != null) {
            CurrentCron.EndField = this.EndTime.toString();
        }

        return CurrentCron;    
    }

}

export default Model