const monthLookup = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function RolloverDay(offset = 0) {
    let now = new Date(), day, month;
    day = now.getDate(),
    month = now.getMonth();
    return (day + offset) % monthLookup[month]
}

export function RolloverMonth(offset = 0) {
    let now = new Date(), day, month;
    day = now.getDate(),
    month = now.getMonth();
    if (month == 11 && day + offset > 31) {
        return '01';
    }
    else {
        if (('' + month).length < 2) {
            return '0' + (month + 1)
        }
        return '' + (month + 1);
    }
}