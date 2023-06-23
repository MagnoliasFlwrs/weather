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
    if (hours < 10) {
        hours= `0${hours}`
    }
    if (minutes < 10) {
        minutes= `0${minutes}`
    }
    return {dayOfMonth, dayOfWeek , month, year , minutes , hours}
}

export const getWindDirection = (deg) => {
    const directions = [
        '&#8593;',
        '&#8599;',
        '&#8594;',
        '&#8600;',
        '&#8595;',
        '&#8601;',
        '&#8592;',
        '&#8598;',
    ];
    const i = Math.round(deg / 45) % 8 ;
    return directions[i]
}
export const calculateDewPoint = (temp, humidity) => {
    const a  = 17.27;
    const b = 237.7;
    const ft = (a*temp)/(b+temp)+ Math.log(humidity/100)
    let dewPoint = (b*ft)/(a-ft)
    
    return dewPoint.toFixed(1);

}
export const calculatePressure = (pressure) => {
    const mmHg = (pressure * (1/1.33)).toFixed(2);
    return mmHg
}

export const getWeatherForecastData = (data) => {
    const forecast = data.list.filter((item)=> {
        return new Date(item.dt_txt).getHours() === 12 && new Date(item.dt_txt).getDate() > new Date().getDate();
    } )
    console.log(forecast);
    const newData = forecast.map((item) => {
        const date = new Date(item.dt_txt);
        const weekdays = [
            'вс',
            'пн',
            'вт',
            'ср',
            'чт',
            'пт',
            'сб'
        ]
        const dayOfWeek = weekdays[date.getDay()];
        const weatherIcon = item.weather[0].icon;
        let minTemp = Infinity;
        let maxTemp = -Infinity;
        for( let i = 0; i< data.list.length; i++) {
            const temp = data.list[i].main.temp;
            const tempDate = new Date(data.list[i].dt_txt);
            if (tempDate.getDate() === date.getDate()) {
                if(temp < minTemp){
                    minTemp = temp
                } else {
                    maxTemp = temp
                }   
            }
            
        }

        return {
            dayOfWeek,
            weatherIcon,
            minTemp,
            maxTemp,
        };
    });
    return newData
}