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

const getAllLogs = () => {
  console.log()
  return $.ajax({
    url: config.apiUrl + `/logs`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showOneLog = (logData) => {
  console.log(logData)
  const logId = logData.log.id
  return $.ajax({
    url: config.apiUrl + `/logs/${logId}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateLog = (date, feet, activity) => {
  const logId = store.log.id
  return $.ajax({
    url: config.apiUrl + `/games/${logId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    log: {
      'date': date,
      'feet': feet,
      'activity': activity
    }
  })
}

module.exports = {
  newLog,
  getAllLogs,
  showOneLog,
  updateLog
}
