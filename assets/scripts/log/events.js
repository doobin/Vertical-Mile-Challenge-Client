'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewLog = (event) => {
  event.preventDefault()
  const logData = getFormFields(event.target)
  api.newLog(logData)
    .then(ui.newLogSuccess)
    .catch(ui.newLogFailure)
}

// const onShowAllLogs = (event) => {
//   event.preventDefault()
//   api.showAllLogs()
//     .then(ui.showAllLogsSuccess)
//     .catch(ui.showAllLogsFailure)
// }

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

const onDestroyLog = (event) => {
  event.preventDefault()
  const logData = getFormFields(event.target)
  api.destroyLog(logData)
    .then(ui.destroyLogSuccess)
    .catch(ui.destroyLogFailure)
}

module.exports = {
  // onShowAllLogs,
  onNewLog,
  onShowOneLog,
  onUpdateLog,
  onDestroyLog
}
