const submitbtn = document.getElementById("submitbtn")
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp_real_val = document.getElementById("temp_real_val")
const temp_status = document.getElementById("temp_status")
const datahide = document.querySelector(".middle_layer")

const hum = document.getElementById("hum")
const feels = document.getElementById("feels")
const pressure = document.getElementById("pressure")
 const speed = document.getElementById("speed")
const gust = document.getElementById("gust")

const weather = document.getElementById("weather")





const getinfo = async (event) => {
    event.preventDefault()

    var cityval = cityName.value
    if (cityval === "") {
        city_name.innerText = `please enter the name before search`
        datahide.classList.add('data_hide')
    }

    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=2c392a09f77255da90dac0e4e4083dcc`
           
            const response = await fetch(url)
           
            const data = await response.json()
            console.log(data)
            const arrdata = [data]
            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            
            feels.innerText = arrdata[0].main.feels_like;
            weather.innerText = arrdata[0].weather[0].description;

            hum.innerText = arrdata[0].main.humidity;
            pressure.innerText = arrdata[0].main.pressure;
            speed.innerText = arrdata[0].wind.speed;
            gust.innerText = arrdata[0].wind.gust;
       
            






            const tempMood = arrdata[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                    
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            cityVal = "";
        } catch
        {
            cityVal = " ";
            datahide.classList.add('data_hide')
            city_name.innerText = `please enter the city name properly`
            
        }

    }

}
submitbtn.addEventListener('click', getinfo)