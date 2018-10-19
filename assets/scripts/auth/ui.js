'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#sign-up-form').hide()
  $('.reset').trigger('reset')
}

const signUpFailure = () => {}

const signInSuccess = (response) => {
  store.user = response.user
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').hide()
  $('#change-password-form').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#show-one-log').removeClass('hidden')
  $('#log-form').removeClass('hidden')
  $('#update-log-form').removeClass('hidden')
  $('.reset').trigger('reset')
}

const signInFailure = () => {}

const passwordChangeSuccess = () => {
  $('.reset').trigger('reset')
}

const passwordChangeFailure = () => {}

const signOutSuccess = () => {
  $('#sign-in-form').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#show-one-log').addClass('hidden')
  $('#sign-up-form').show()
  $('#log-form').addClass('hidden')
  $('#update-log-form').addClass('hidden')
  $('#content').empty()
}

const signOutFailure = () => {}

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
