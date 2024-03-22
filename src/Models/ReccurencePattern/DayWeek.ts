import CronExpression from "../Cron";

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

class Model {
    Days: string[]
    DayOption: DaysOfWeek
    Reccur: number

    constructor() {
        this.Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.DayOption = DaysOfWeek.Monday;
        this.Reccur = 1;
    }
    //completely untested
    UpdateCron(CurrentCron: CronExpression) {
        let output = "";            
        let Last = -1;
        ///Change to iterate on Days
        Object.values(DaysOfWeek).forEach((key, DOfWeek) => {
            //if the sum has the current day
            if ((DOfWeek & this.DayOption) != 0) {
                let Next: number;
                if (DOfWeek != DaysOfWeek.Saturday) {
                    //Next = 1 if sum has the next day, 0 if not
                    Next = DOfWeek << 1 & this.DayOption;
                } else {
                    Next = -1;
                }

                if (Last == 0) {
                    if (Next < 1) {
                        output += Math.log(getBaseLog(2, DOfWeek)) + ",";
                    } else {
                        output += Math.log(getBaseLog(2, DOfWeek)) + "";
                    }

                }
                else if (Next == 0 || Next == -1) {
                    output += "-" + Math.log(getBaseLog(2, DOfWeek)) + ",";
                }

                Last = 1;

            } else { Last = 0; }
        })
        //add removal for ending ","

        CurrentCron.DayOfWeek.Value = output;

        //CurrentCron.DayOfWeek.Step = this.Reccur;
        return CurrentCron;


    }
}

enum DaysOfWeek {
    None = 0,
    Sun = 1,
    Mon = 1 << 1,
    Tue = 1 << 2,
    Wed = 1 << 3,
    Thu= 1 << 4,
    Fri= 1 << 5,
    Sat= 1 << 6
}

export {
    Model,
    DaysOfWeek,
}