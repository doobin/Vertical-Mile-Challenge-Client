'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewLog = (event) => {
  event.preventDefault()
  const logData = getFormFields(event.target)
  console.log(logData)
  api.newLog(logData)
    .then(ui.newLogSuccess)
    .catch(ui.newLogFailure)
}

const onShowAllLogs = (event) => {
  event.preventDefault()
  api.getAllLogs()
    .then(ui.showAllLogsSuccess)
    .catch(ui.showAllLogsFailure)
}

const onShowOneLog = (event) => {
  event.preventDefault()
  const logData = getFormFields(event.target)
  api.showOneLog(logData)
    .then(ui.showOneLogSuccess)
    .catch(ui.showOneLogFailure)
}

const onUpdateLog = (event) => {
  event.preventDefault()
  const logData = getFormFields(event.target)
  api.updateLog(logData)
    .then(ui.updateLogSuccess)
    .catch(ui.updateLogFailure)
}

module.exports = {
  onShowAllLogs,
  onNewLog,
  onShowOneLog,
  onUpdateLog
}
