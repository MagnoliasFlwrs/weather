export const getCurrentDateTime =()=> {
    const months = [
        'январь',
        'февраль',
        'март',
        'апрель',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь'
    ];
    const weekdays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
    ]
    const date = new Date();
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth() -1 ];
    const dayOfWeek = weekdays[date.getDay()];
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes  = date.getMinutes();
    if (hours > 10) {
        hours= `0${hours}`
    }
    if (minutes > 10) {
        minutes= `0${minutes}`
    }
    return {dayOfMonth, dayOfWeek , month, year , minutes , hours}
}