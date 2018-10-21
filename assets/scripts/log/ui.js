'use strict'

const store = require('../store.js')

const showAllLogsSuccess = (response) => {
  $('#content').html('')
  response.logs.forEach(log => {
    const logHTML = (`
      <h4>Log ID: ${log.id}</h4>
      <p>Date: ${log.date}<p>
      <p>Vertical Feet: ${log.feet}</p>
      <p>Activity: ${log.activity}</p>
      <p>User ID: ${log.user_id}</p>
      `)
    $('#content').append(logHTML)
    $('.reset').trigger('reset')
  })
}

const showAllLogsFailure = () => {
  $('#content').html('Show All Logs Failed')
  $('#content').css('color', 'red')
  $('.reset').trigger('reset')
}

const showOneLogSuccess = (response) => {
  $('#content').html('')
  const log = response.log
  const logHTML = (`
    <h4>Log ID: ${log.id}</h4>
    <p>Date: ${log.date}<p>
    <p>Feet: ${log.feet}</p>
    <p>Activity: ${log.activity}</p>
    <p>User ID: ${log.user_id}</p>
    `)
  $('#content').append(logHTML)
  $('.reset').trigger('reset')
}

const showOneLogFailure = () => {
  $('#content').html('Show One Log Failed')
  $('#content').css('color', 'red')
  $('.reset').trigger('reset')
}

const newLogSuccess = (data) => {
  store.log = data.log
  $('#display-message').html('New Log Sucess')
  $('#display-message').css('color', 'green')
  $('.reset').trigger('reset')
}

const newLogFailure = () => {
  $('#display-message').html('New Log Failed')
  $('#display-message').css('color', 'red')
}

const updateLogSuccess = (data) => {
  store.log = data.log
}

const updateLogFailure = () => {
  $('#display-message').html('Update Log Failed')
  $('#display-message').css('color', 'red')
}

module.exports = {
  showAllLogsSuccess,
  showAllLogsFailure,
  showOneLogSuccess,
  showOneLogFailure,
  newLogSuccess,
  newLogFailure,
  updateLogSuccess,
  updateLogFailure
}
