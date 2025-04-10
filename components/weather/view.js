export const view = {
    renderWeather(data,time){
        let status=data?.weather[0]?.main;
        let img=`<img src="./resources/clouds.png" alt="">`;
        if(status=="Clear"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #fff176, #fff59d)";
            document.querySelector(".weatherDisplay").style.color="black";
            img=`<img src="./resources/clear.png" alt="">`;
        }
        else if(status=="Drizzle"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #bfc9ca, #7f8c8d)";
            document.querySelector(".weatherDisplay").style.color="white";
            img=`<img src="./resources/drizzle.png" alt="">`;
        }
        else if(status=="Clouds"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #4f81bd, #1e3d6f)";
            document.querySelector(".weatherDisplay").style.color="white";
            img=`<img src="./resources/clouds.png" alt="">`;
        }
        else if(status=="Mist"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #a7c7e7, #7f8c8d)";
            document.querySelector(".weatherDisplay").style.color="white";
            img=`<img src="./resources/mist.png" alt="">`;
        }
        else if(status=="Rain"){
            document.querySelector(".weatherDisplay").style.background="linear-gradient(to bottom, #e0e0e0, #f5f5f5)";
            document.querySelector(".weatherDisplay").style.color="black";
            img=`<img src="./resources/rain.png" alt="">`;
        }
        if(status=="Clear"){
            status="clear";
        }
        else if(status=="Clouds"){
            status="cloudy";
        }
        else if(status=="Mist"){
            status="misty";
        }
        else if(status=="Rain"){
            status="rainy";
        }
        else if(status=="Drizzle"){
            status="drizzly";
        }
        view.startCarousel();

        document.querySelector(".weatherDisplay").innerHTML=`<h3>${data?.name}</h3>
            <h4>Updated on ${time}</h4>
            <div>
                ${img}
                <div>Temp: ${Math.round(data?.main?.temp)}°C</div>
            </div>
            <h4>Weather in ${data?.name} is ${status}</h4>
            <div class="extraData">
                <div>Humidity: ${data?.main?.humidity}%</div>
                <div>Wind speed: ${data?.wind?.speed}m/s</div>
                <div>sunrise: ${new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}</div>
                <div>sunset: ${new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}</div>
            </div>`;
            /**cant understand how line 55 works */
    },
    startCarousel:()=> {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const itemWidth = carouselItems[0].offsetWidth;
    let currentIndex = 0;
    const totalItems = carouselItems.length; 

    function moveCarousel() {
        currentIndex++;
        if (currentIndex >= totalItems) {  
            currentIndex = 3;  
        }
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;  
    }
    setInterval(moveCarousel, 1000); 
}
}