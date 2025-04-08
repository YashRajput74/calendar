/*we will get api data here */
/*how to run the api?*/

/*how to use these???? */
/*(apiUrl + city + &appid=${apiKey});format of fetching(requesting) */

export const model={
    requestData(location,successCallback){
        const apiKey = "b438f16eb0c75fd741e0afc7fb8a53e3";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const url=`${apiUrl}${location}&appid=${apiKey}`;
        makeRequest('GET',url,(data) => {
            successCallback(data);
            /**if it success then do this but what if it is not? */
            /**if it fails we should log some error */
        })
    }
}

/* function makeRequest(method, apiUrl, successCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, apiUrl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            successCallback(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
} */

function makeRequest(methodToDo,apiUrl,successCallback){
    fetch(apiUrl, {
        method: methodToDo,
    })
        .then((res) => res.json())
        .then((data) => successCallback(data))
        .catch((err) => console.error(err));
}