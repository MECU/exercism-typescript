class Gigasecond {
    myDate: Date;

    constructor(date: Date) {
        this.myDate = date;
    }

    date(): Date {
        let tempDate = new Date(this.myDate);
        tempDate.setUTCSeconds(tempDate.getUTCSeconds() + 1000000000);
        return tempDate;
    }
}

export default Gigasecond
