export const model={
    requestData(location,successCallback){
        const apiKey = "b438f16eb0c75fd741e0afc7fb8a53e3";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const url=`${apiUrl}${location}&appid=${apiKey}`;
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const displayTime = `${hours}:${minutes}`;
        makeRequest('GET',url,(data) => {
            successCallback(data,displayTime);
            /**if it success then do this but what if it is not? */
            /**if it fails we should log some error */
        })
    },
    getLastSearchedCity() {
        return localStorage.getItem("lastSearchedCity");
    },
    setLastSearchedCity(cityName) {
        localStorage.setItem("lastSearchedCity", cityName);
    }
}

function makeRequest(methodToDo,apiUrl,successCallback){
    fetch(apiUrl, {
        method: methodToDo,
    })
        .then((res) => res.json())
        .then((data) => successCallback(data))
        .catch((err) => console.error(err));
}