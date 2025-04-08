export const view = {
    renderWeather(data){
        document.querySelector(".weatherDisplay").textContent=`{
            City:${data?.name},
            Temprature:${Math.round(data?.main?.temp)},
            Humidity:${data?.main?.humidity},
            Wind speed:${data?.wind?.speed},
            Pressure:${data?.main?.pressure}
            }`;
        let status=data?.weather[0]?.main
        if(status=="Clear"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #f7b731, #f4d03f)"
        }
        else if(status=="Drizzle"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #bfc9ca, #7f8c8d)"
        }
        else if(status=="Clouds"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #4f81bd, #1e3d6f)"
        }
        else if(status=="Mist"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #a7c7e7, #7f8c8d)"
        }
        else if(status=="Rain"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #e0e0e0, #f5f5f5)"
        }
        console.log(data);
    }
}
