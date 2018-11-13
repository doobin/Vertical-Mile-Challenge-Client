'use strict'

const config = require('../config.js')
const store = require('../store.js')

const newLog = (logData) => {
  return $.ajax({
    url: config.apiUrl + `/logs`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: logData
  })
}

const showOneLog = (logData) => {
  const logId = logData.log.id
  return $.ajax({
    url: config.apiUrl + `/logs/${logId}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showAllLogs = () => {
  return $.ajax({
    url: config.apiUrl + `/logs`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateLog = (logId, logData) => {
  console.log(logId)
  console.log(logData)
  // const id = logId
  return $.ajax({
    url: config.apiUrl + `/logs/${logId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: logData
  })
}

const destroyLog = (logId) => {
  return $.ajax({
    url: config.apiUrl + `/logs/${logId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  newLog,
  showOneLog,
  showAllLogs,
  updateLog,
  destroyLog
}
