const winston = require("winston")
const colors = require('colors/safe');
const { formatDateTime } = require("format_date_time_moment/node")

let date = formatDateTime.format(new Date(), "ll")
let removeSpaces = date.replaceAll(" ", "")
let getDate = removeSpaces.replaceAll(",", "-")


const hourglass = winston.createLogger({
    levels: {
        start: 0,
        end: 2,
    },
    format: winston.format.combine(winston.format.splat(),
        winston.format.timestamp(),
        myFormat),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            level: "start",
            filename: `timer/${getDate}.log`,
            format: winston.format.json()
        }), new winston.transports.File({
            level: "end",
            filename: `timer/${getDate}.log`,
            format: winston.format.json()
        }),
    ],
    level: 'end',
});

hourglass.start("should log")
hourglass.end("should log end")