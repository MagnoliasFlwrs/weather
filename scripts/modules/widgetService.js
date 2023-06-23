import { fetchForecast, fetchWeather } from "./apiService.js";
import { renderWidgetForecast, renderWidgetOther, renderWidgetToday, showError } from "./render.js";

export const startWidget = async() =>  {
    const widget = document.createElement('div');
    widget.className = 'widget';

    const dataWeather = await fetchWeather('Минск');
    if (dataWeather.success) {
        renderWidgetToday(widget , dataWeather.data);
        renderWidgetOther(widget , dataWeather.data);
    }
    else {
        showError(widget)
    }

    const dataWeatherForecast = await fetchForecast('Минск');
    if (dataWeatherForecast.success) {
        renderWidgetForecast(widget ,dataWeatherForecast.data);
    }
    else {
        showError(widget)
    }

    
    

    return widget
}

