const { formatDateTime } = require("format_date_time_moment/node")


let getDate = formatDateTime.format(new Date(), "ll")
let removeSpaces = getDate.replaceAll(" ", "")
let date = removeSpaces.replaceAll(",", "-")

module.exports = { date }