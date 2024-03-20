class Model {
    Option: Options;
    constructor() {
        this.Option = Options.Weekly;
    }
}
enum Options {
    None = 0,
    Daily = 1,
    Weekly = 1 << 1,
    Monthly = 1 << 2,
    Yearly = 1 << 3,
}

export {
    Model,
    Options,
}