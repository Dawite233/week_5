let weather = {
    "message": "accurate",
    "code": "200",
    "count": 1,
    "list": [
        {
            "id": 1234565,
            "name": "London",
            "coord": {
                "lat": 51.5098,
                "lon": -0.1234
            },
            "main": {
                "temp": 7, // current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8,

            },
            "dt": 1234546526,
            "wind": {
                "speed": 4.6, // this info - speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "rain": null,
            "snow": null,
            "cloud": {
                "all": 90
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist", // description
                    "icon": "50d",

                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle", // description
                    "icon": "09d",

                }
            ]

        }
    ]
}

let weatherList = weather.list
console.log(weatherList)

let weatherInfo = weatherList[0]
console.log(weatherInfo)

let main = weatherInfo.main
console.log(main);

let currentTemps = main.temp
console.log( currentTemps)

console.log('Temp:', currentTemps)

let temp = weather.list[0].main.temp
console.log(temp)


let wind = weather.list[0].wind.speed
console.log(wind)

let winds = weatherInfo.wind
let speed = winds.speed
console.log("Current wind speed is "  + speed + ".")


let weatherDescriptionArray = weatherInfo.weather

let descriptions = []

weatherDescriptionArray.forEach( function (weatherDescription) {
    descriptions.push(weatherDescription.description)
})

let descriptionsString = descriptions.join( ', ')
console.log('The  weather description is ' + descriptionsString  + '.')

