import { model } from "./model";
import { view } from "./view";
export const controller={
    init(){
        document.querySelector(".searchWeatherButton").addEventListener("click",(event)=>{
            // console.log(event.target.closest(".weatherApp"));
            const parent=event.target.closest(".weatherApp");
            const input=parent.querySelector("span>input");
            // console.log(input.value);
            if(input.value!=""){
                model.requestData(input.value,view.renderWeather);
            }
        })
    }
}