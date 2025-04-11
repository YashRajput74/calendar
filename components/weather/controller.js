import { model } from "./model";
import { view } from "./view";
export const controller={
    init(){
        const storedCity = model.getLastSearchedCity();
        if (storedCity) {
            model.requestData(storedCity, view.renderWeather);
        }
        document.querySelector(".carouselContainer").addEventListener("click", (event) => {
            if (event.target && event.target.matches(".carousel-item button.searchWeatherButton")) {
                const parent = event.target.closest(".carousel-item");
                const input = parent.querySelector("span > input");
                
                // Check if the input field is not empty
                if (input.value !== "") {
                    const cityName = input.value;
                    // Start the carousel animation (or other desired actions)
                    view.startCarousel();
                    model.setLastSearchedCity(cityName);
                    model.requestData(cityName, view.renderWeather);
                }
            }
        });
        
    }
}