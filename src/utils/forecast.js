const request = require('request')

//
//Goal: Add new data to forecast
//
//1. Update the forecast string to include new data
//2. Commit your changes
//3. Push your changes to GitHub and deploy to Heroku
//4. Test your work in the live application

// 1. Setup the "forecast" function in utils/forecast.js
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f6e534de2a383b322fda20be4af76e8a/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.' + 'Today the Highest temperature is ' + body.daily.data[0].temperatureHigh + ' and the lowest temperature is ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast