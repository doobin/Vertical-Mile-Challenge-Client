'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onNewLog = (event) => {
  event.preventDefault()
  const logData = getFormFields(event.target)
  api.newLog(logData)
    .then(ui.newLogSuccess)
    .then(onShowAllLogs)
    .catch(ui.newLogFailure)
}

const onShowAllLogs = () => {
  api.showAllLogs()
    .then(ui.showAllLogsSuccess)
    .catch(ui.showAllLogsFailure)
}

const onUpdateLog = (event) => {
  console.log(event)
  event.preventDefault()
  const logId = $(event.target).closest('section').data('id')
  console.log(logId)
  store.id = logId
  const logData = getFormFields(event.target)
  console.log(store.id)
  console.log(logData)
  api.updateLog(store.id, logData)
    .then(ui.updateLogSuccess)
    .then(onShowAllLogs)
    .catch(ui.updateLogFailure)
}

const onDestroyLog = (event) => {
  console.log(event)
  event.preventDefault()
  const logId = $(event.target).closest('section').data('id')
  console.log(logId)
  if (confirm('Are you sure you want to delete this log?')) {
    api.destroyLog(logId)
      .then(ui.destroyLogSuccess)
      .then(onShowAllLogs)
      .catch(ui.destroyLogFailure)
  }
}

const addHandlers = () => {
  $('#handlebarsContent').on('click', '#deleteButton', onDestroyLog)
  $('#handlebarsContent').on('click', '#updateButton', onUpdateLog)
}

module.exports = {
  onNewLog,
  onShowAllLogs,
  onUpdateLog,
  onDestroyLog,
  addHandlers
}
