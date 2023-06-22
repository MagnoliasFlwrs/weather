import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from "./render.js";

export function startWidget()   {
    const widget = document.createElement('div');
    widget.className = 'widget';
    renderWidgetToday(widget);
    renderWidgetOther(widget);
    renderWidgetForecast(widget);

    return widget
}

