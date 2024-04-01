const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

const access_key = "7a169a99dcb9e981c995294c0afb8d75"

const coordinates = "37.8267,-122.4233"

const weatherStackUrl = `http://api.weatherstack.com/current?access_key=${access_key}&query=${coordinates}`

geocode('Kherson', (error, { latitude, longitude, location} = {}) => {
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
    })
})
