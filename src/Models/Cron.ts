class CronField {
    Value: string;
    Step: number;
    AllowedValues: number[];

    constructor(Value: string, Step: number, AllowedValues: number[]) {
        this.Value = Value;
        this.Step = Step;
        this.AllowedValues = AllowedValues;
    }
}

class CronExpression {
    Minute: CronField;
    Hour: CronField;
    DayOfMonth: CronField;
    Month: CronField;
    DayOfWeek: CronField;
    EndField: string;

    constructor(Minute: CronField, Hour: CronField, DayOfMonth: CronField, Month: CronField, DayOfWeek: CronField, EndField: string) {
        this.Minute = Minute;
        this.Hour = Hour;
        this.DayOfMonth = DayOfMonth;
        this.Month = Month;
        this.DayOfWeek = DayOfWeek;
        this.EndField = EndField;
    }
}

let Minute = new CronField("", 0, [0, 59]);
let Hour = new CronField("", 0, [0, 23]);
let DayOfMonth = new CronField("", 0, [1, 31]);
let Month = new CronField("", 0, [1, 12]);
let DayOfWeek = new CronField("", 0, [0, 6]);

let Cron = new CronExpression(Minute, Hour, DayOfMonth, Month, DayOfWeek, "");

export default CronExpression