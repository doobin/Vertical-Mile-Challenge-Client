'use strict'

const store = require('../store.js')
const showLogsEvents = require('../auth/show-logs-events.js')

const showOneLogSuccess = (response) => {
  $('#content-3').html('')
  const log = response.log
  const logHTML = (`
    <h4>Log ID: ${log.id}</h4>
    <p>Date: ${log.date}<p>
    <p>Vertical Feet: ${log.feet}</p>
    <p>Activity: ${log.activity}</p>
    <p>User ID: ${log.user_id}</p>
    `)
  $('#content-3').append(logHTML)
  $('.reset').trigger('reset')
  successAlert()
}

const showOneLogFailure = () => {
  $('#content-3').empty()
  $('.reset').trigger('reset')
  successFail()
}

const newLogSuccess = (data) => {
  store.log = data.log
  $('#modalLogForm').modal('hide')
  $('.reset').trigger('reset')
  $('#content-3').empty()
  successAlert()
  showLogsEvents.onShowAllLogs()
}

const newLogFailure = () => {
  $('.reset').trigger('reset')
  $('#content-3').empty()
  successFail()
}

const updateLogSuccess = (data) => {
  store.log = data.log
  $('.reset').trigger('reset')
  $('#content-3').empty()
  successAlert()
  showLogsEvents.onShowAllLogs()
}

const updateLogFailure = () => {
  $('.reset').trigger('reset')
  $('#content-3').empty()
  successFail()
}

const destroyLogSuccess = (data) => {
  $('.reset').trigger('reset')
  $('#content-3').empty()
  successAlert()
  showLogsEvents.onShowAllLogs()
}

const destroyLogFailure = () => {
  $('.reset').trigger('reset')
  $('#content-3').empty()
  successFail()
}

const successAlert = () => {
  $('#content').removeClass('hidden')
  setTimeout(() => {
    $('#content').addClass('hidden')
  }, 3000)
}

const successFail = () => {
  $('#content-2').removeClass('hidden')
  setTimeout(() => {
    $('#content-2').addClass('hidden')
  }, 3000)
}

module.exports = {
  showOneLogSuccess,
  showOneLogFailure,
  newLogSuccess,
  newLogFailure,
  updateLogSuccess,
  updateLogFailure,
  destroyLogSuccess,
  destroyLogFailure
}
