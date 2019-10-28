const axios = require('axios').default

exports.sendLog = (data, apiKey, env, source, hostname) => {
  let watchdogUrl = `https://http-intake.logs.datadoghq.com/v1/input/${apiKey}?ddtags=env:${env}&ddsource=${source}&hostname=${hostname}`
  console.log('dxm123 inside sendLog function')
  let headers = { 'Content-Type': 'text/plain' }
  axios.post(watchdogUrl, data, { headers: headers }).then(
    response => {
      console.log('send log response: ', response)
    },
    error => {
      console.log('send log error: ', error)
    }
  )
}
