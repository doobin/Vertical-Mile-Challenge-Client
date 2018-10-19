'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}

const signUpFailure = () => {}

const signInSuccess = (response) => {
  store.user = response.user
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
}

const signInFailure = () => {}

const passwordChangeSuccess = () => {}

const passwordChangeFailure = () => {}

const signOutSuccess = () => {}

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
