const BASE_URL = "http://localhost:4000";


const resultDiv = document.getElementById("result");


document
.getElementById("weatherBtn")
.onclick = getWeather;


document
.getElementById("pdfBtn")
.onclick = downloadPDF;



async function getWeather(){

const city = cityInput.value;


resultDiv.classList.remove("hidden");

resultDiv.innerHTML = "Loading...";


const res = await fetch(BASE_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({city})

});


const data = await res.json();


resultDiv.innerHTML = `

<h2>${data.address}</h2>

<p> <img src="assets/temperatures.png" alt="temperatures" width="25" height="25"> <strong>Temp:</strong> ${data.currentConditions.temp} °C</p>

<p> <img src="assets/humidity.png" alt="humidity" width="25" height="25"> <strong>Humidity:</strong> ${data.currentConditions.humidity}</p>

<p> <img src="assets/air-conditioner.png" alt="condition" width="25" height="25"> <strong>Condition:</strong> ${data.currentConditions.conditions}</p>

<p><img src="assets/global-search.png" alt="source" width="25" height="25"> <strong>Source:</strong> ${data.source}</p>

<p style="color:red;"><img src="assets/quick-response.png" alt="response time" width="25" height="25"> <strong>Response Time:</strong> ${data.responseTime}ms</p>
`;


}



function downloadPDF(){
fetch("http://localhost:4000/report", {

    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },

    body: JSON.stringify({
    city: cityInput.value
    })

})
.then(res => res.blob())
.then(blob => {

 const url = window.URL.createObjectURL(blob);

 window.open(url);

});


}
