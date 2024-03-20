import CronExpression from "../Cron";

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

class Model {
    Days: string[]
    DayOption: DaysOfWeek

    constructor() {
        this.Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.DayOption = DaysOfWeek.Monday;
    }

    UpdateCron(CurrentCron: CronExpression) {
        let output = "";            
        let Last = -1;
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
        return CurrentCron;

    }
}

enum DaysOfWeek {
    None = 0,
    Sunday = 1,
    Monday = 1 << 1,
    Tuesday = 1 << 2,
    Wednesday = 1 << 3,
    Thursday = 1 << 4,
    Friday = 1 << 5,
    Saturday = 1 << 6
}

export default Model