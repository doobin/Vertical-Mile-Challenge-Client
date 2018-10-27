'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const logEvents = require('./log/events.js')
const showLogsEvents = require('./auth/show-logs-events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

// Auth events
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})

// Log events
$(() => {
  $('#log-form').on('submit', logEvents.onNewLog)
  $('#log-form').on('submit', showLogsEvents.onShowAllLogs)
  $('#update-log-form').on('submit', logEvents.onUpdateLog)
  $('#destroy-log').on('submit', logEvents.onDestroyLog)
  $('#show-one-log').on('submit', logEvents.onShowOneLog)
  // $('#show-all-logs').on('click', logEvents.onShowAllLogs)
})
