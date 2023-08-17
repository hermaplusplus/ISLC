export const monthLookup = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function RolloverDay(offset = 0) {
    let now = new Date(), day, month;
    day = now.getDate(),
    month = now.getMonth();
    if ((day + offset) % monthLookup[month] == 0)
        return monthLookup[month];
    else
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
            if ((day + offset) < monthLookup[month])
                return '0' + (month + 1)
            else
                return '0' + (month + 2)
        } else {
            //return '' + (month + 1);
            if ((day + offset) < monthLookup[month])
                return '0' + (month + 1)
            else
                return '0' + (month + 2)
        }
    }
}