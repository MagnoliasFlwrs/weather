const API_URL ='https://api.openweathermap.org/data/2.5/';
const API_KEY = '2cb2675c11baa1fb475e634e4c3c0658';

export const fetchWeather = async (town) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${town}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error('ошибка запроса')
        }
        const data = await response.json();
        return { success:true , data};

    } catch (error) {
        return { success:false , error};
    }
    
}
export const fetchForecast = async (town) => {
    try {
        const response = await fetch(`${API_URL}forecast?q=${town}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error('ошибка запроса')
        }
        const data = await response.json();
        return { success:true , data};

    } catch (error) {
        return { success:false , error};
    }
    
}