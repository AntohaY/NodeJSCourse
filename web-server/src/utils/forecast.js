const request = require('postman-request')

const access_key = "7a169a99dcb9e981c995294c0afb8d75"

const forecast = (latitude, longitude, callback) => {
    console.log(latitude, longitude)
    const url = 'http://api.weatherstack.com/current?access_key='+access_key +'&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find weather forecast. Try another search', undefined)
        } else {
            callback(undefined, `The temprerature in ${body.location.name} is ${body.current.temperature} and it feels like ${body.current.feelslike}`)
        }
    })
}

module.exports = forecast