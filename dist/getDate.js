const { format } = require("when_you_free")
let date = format(new Date(), "ll")
let removeSpaces = date.replaceAll(" ", "")
let getDate = removeSpaces.replaceAll(",", "-")
module.exports = { getDate }