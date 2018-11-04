'use strict'

const store = require('../store.js')
const showLogsEvents = require('./show-logs-events.js')

const signUpSuccess = () => {
  $('#modalRegisterForm').modal('hide')
  $('.reset').trigger('reset')
  $('#modalRegisterForm').modal('hide')
  successAlert()
}

const signUpFailure = () => {
  $('#modalRegisterForm').modal('hide')
  $('.reset').trigger('reset')
  $('#modalRegisterForm').modal('hide')
  successFail()
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#show-one-log').removeClass('hidden')
  $('#show-all-logs').removeClass('hidden')
  $('#log-form').removeClass('hidden')
  $('#update-log-form').removeClass('hidden')
  $('#destroy-log').removeClass('hidden')
  $('.reset').trigger('reset')
  $('#sign-in-jumbotron').removeClass('hidden')
  $('.jumbo-content').addClass('hidden')
  $('#modalSignInForm').modal('hide')
  successAlert()
  showLogsEvents.onShowAllLogs()
}

const signInFailure = () => {
  $('#modalSignInForm').modal('hide')
  $('.reset').trigger('reset')
  successFail()
}

const passwordChangeSuccess = () => {
  $('#modalChangePasswordForm').modal('hide')
  $('.reset').trigger('reset')
  successAlert()
}

const passwordChangeFailure = () => {
  $('#modalChangePasswordForm').modal('hide')
  $('.reset').trigger('reset')
  successFail()
}

const signOutSuccess = () => {
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#show-one-log').addClass('hidden')
  $('#show-all-logs').addClass('hidden')
  $('#log-form').addClass('hidden')
  $('#update-log-form').addClass('hidden')
  $('#destroy-log').addClass('hidden')
  $('#content-3').empty()
  $('#sign-in-jumbotron').addClass('hidden')
  $('#handlebarsContent').empty()
  $('.jumbo-content').removeClass('hidden')
  successAlert()
}

const signOutFailure = () => {
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailure
}
