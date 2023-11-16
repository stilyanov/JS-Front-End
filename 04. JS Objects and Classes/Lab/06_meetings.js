function getAppointments(array) {
    let personInfo = {};

    for (const person of array) {
        const [weekday, name] = person.split (" ");

        if (!personInfo.hasOwnProperty(weekday)) {
            personInfo[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (const iterator of Object.entries(personInfo)) {
        const [weekday, name] = iterator;
        console.log(`${weekday} -> ${name}`);
    }
}

getAppointments (['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);