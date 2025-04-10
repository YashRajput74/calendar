import { model } from "./model";
import { view } from "./view";
export const controller={
    init(){
        const storedCity = model.getLastSearchedCity();
        if (storedCity) {
            model.requestData(storedCity, view.renderWeather);
        }
        document.querySelector(".searchWeatherButton").addEventListener("click",(event)=>{
            const parent=event.target.closest(".weatherApp");
            const input=parent.querySelector("span>input");
            if(input.value!=""){
                const cityName=input.value;
                model.setLastSearchedCity(cityName);
                model.requestData(cityName,view.renderWeather);
                view.startCarousel();
            }
        })
    }
}