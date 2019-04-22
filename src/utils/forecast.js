const request = require('request');

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGV0c3VrdWdpIiwiYSI6ImNqdWllYXAydTByNHc0NHBuc3N2MWR3bGIifQ._hZbIU-rhhQYDC0yppJfng&limit=1'
    // const url = 'https://api.darksky.net/forecast/6f512a21b5d74f66eaf529819967058c/' + latitude + ',' + longitude + '35.658581,139.745433?lang=ja';
    const url = 'https://api.darksky.net/forecast/6f512a21b5d74f66eaf529819967058c/' + latitude + ',' + longitude + '?lang=ja';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, body.daily.data[0].summary)
        }
    })
}


module.exports = forecast;