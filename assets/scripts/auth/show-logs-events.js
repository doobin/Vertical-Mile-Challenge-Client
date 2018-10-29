const config = require('../config.js')
const store = require('../store.js')

const onShowAllLogs = () => {
  // event.preventDefault()
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
  // $('.jumbo-content').html(accumFeet(response))
  successAlert()
  if (response.logs.length === 0) {
    $('#sign-in-jumbotron').html('No submitted Logs! Please submit a Log.')
  } else {
    const logHTML = (`
      <h4>Hello ${store.user.email},</h4>
      `)
    const totalFeet = accumFeet(response)
    $('#sign-in-jumbotron').html(
      logHTML + 'You have logged ' + totalFeet + ' feet. You only have ' +
      Math.abs(totalFeet - 5280) + ' feet to go!'
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
  console.log(response)
  let totalFeet = 0
  for (let i = 0; i < response.logs.length; i++) {
    totalFeet += response.logs[i].feet
  }
  console.log(totalFeet)
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
