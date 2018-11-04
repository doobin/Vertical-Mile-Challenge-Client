const config = require('../config.js')
const store = require('../store.js')
const showLogsTemplate = require('../templates/logs.handlebars')

const onShowAllLogs = () => {
  showAllLogs()
    .then(showAllLogsSuccess)
    .catch(showAllLogsFailure)
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

const showAllLogsSuccess = (response) => {
  successAlert()
  const showLogsHTML = showLogsTemplate({ logs: response.logs })
  $('#handlebarsContent').html(showLogsHTML)
  const logHTML = (`
    <h4>Hello ${store.user.email},</h4>
    `)
  const logButton = (`
    <div class="text-left">
      <a id="logButton" class="btn btn-success" data-toggle="modal" data-target="#modalLogForm">Add Log</a>
    </div>
    `)
  if (response.logs.length === 0) {
    $('#sign-in-jumbotron').html(
      logHTML + 'No Logs submitted! Please Add a Log.' +
      `<div>${logButton}</div>`
    )
  } else {
    const totalFeet = accumFeet(response)
    $('#sign-in-jumbotron').html(
      logHTML + 'You have logged ' + totalFeet + ' feet. Only ' +
      (5280 - totalFeet) + ' feet to go!' + `<div>${logButton}</div>`
    )
    $('.reset').trigger('reset')
  }
}

const showAllLogsFailure = () => {
  $('#content-3').empty()
  $('.reset').trigger('reset')
  successFail()
}

const accumFeet = (response) => {
  let totalFeet = 0
  for (let i = 0; i < response.logs.length; i++) {
    totalFeet += response.logs[i].feet
  }
  return totalFeet
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
  onShowAllLogs
}
