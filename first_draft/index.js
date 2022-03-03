const winston = require("winston")
const colors = require('colors/safe');
const { formatDateTime } = require("format_date_time_moment/node")

let date = formatDateTime.format(new Date(), "ll")
let removeSpaces = date.replaceAll(" ", "")
let getDate = removeSpaces.replaceAll(",", "-")


const myFormat = winston.format.printf(({ level, message, timestamp, ...metadata }) => {
    let readableTime;
    let white = colors.white.bold
    let red = colors.red.bold;
    let green = colors.green.bold;
    let pink = colors.magenta;
    let teal = colors.cyan.bold;
    let blue = colors.brightBlue.bold;
    let yellow = colors.yellow;
    let rainbow = colors.rainbow.bold
    let gray = colors.bold.gray
    let bgBlack = colors.cyan.bgBlack
    let impMessage = colors.white
    if (timestamp) {
        readableTime = formatDateTime.format(timestamp, "LTS")
        timestamp = yellow(timestamp);
        readableTime = yellow(readableTime)
    }
    if (level) {
        if (level === "problem") {
            level = colors.red(level)
            message = red(message)
        } else if (level === "should") {
            level = colors.white(level)
            message = white(message)
        } else if (level === "is") {
            level = colors.magenta(level)
            message = pink(message)
        } else if (level === 'step') {
            level = colors.green(level)
            message = green(message)
        } else if (level === "motherlode") {
            level = colors.rainbow(level)
            message = rainbow(message)
        } else if (level === "how") {
            level = colors.cyan(level)
            message = teal(message)
        } else {
            level = colors.blue(level)
            message = blue(message)
        }
    }

    let msg = `${readableTime} [${level}] : ${message}`
    if (metadata) {
        msg += JSON.stringify(metadata)
    }
    return msg
});


const see = winston.createLogger({
    levels: {
        story: 0,
        problem: 1,
        should: 2,
        is: 3,
        how: 4,
        step: 5,
        motherlode: 6,

    },
    format: winston.format.combine(winston.format.splat(),
        winston.format.timestamp(),
        myFormat),
    // format: winston.format.combine(
    //     winston.format.colorize(),
    //     winston.format.simple(),
    // ),
    transports: [
        new winston.transports.Console(),
        //  new winston.transports.File({
        //     level: `story`,
        //     filename: path.join(logDir, `/${getDate}/0_userStory.log`),
        //     format: winston.format.json()

        // }),
        // new winston.transports.File({
        //     level: `problem`,
        //     filename: path.join(logDir, `/${getDate}/1_problem.log`),
        //     // format: winston.format.json()

        // }), new winston.transports.File({
        //     level: `should`,
        //     filename: path.join(logDir, `/${getDate}/2_should.log`),
        //     format: winston.format.json()
        // }),
        // new winston.transports.File({
        //     level: `is`,
        //     filename: path.join(logDir, `/${getDate}/3_is.log`),
        //     format: winston.format.json()
        // }),
        // new winston.transports.File({
        //     level: `how`,
        //     filename: path.join(logDir, `/${getDate}/4_how.log`),
        //     format: winston.format.json()
        // }),
        new winston.transports.File({
            // level: 'step',
            filename: `upsets/${getDate}/problems.log`,
            format: winston.format.simple()
        }),
        new winston.transports.File({
            level: 'motherlode',
            filename: `upsets/${getDate}/sims3.log`,
            format: winston.format.simple()
        }), new winston.transports.File({
            level: "start",
            filename: `timer/${getDate}.log`,
            format: winston.format.json()
        }),
        new winston.transports.File({
            level: "end",
            filename: `timer/${getDate}.log`,
            format: winston.format.json()
        }),
    ],
    level: 'end',
    exceptionHandlers: [
        new winston.transports.File({
            format: winston.format.json(),
            filename: `upsets/${getDate}/exceptions.log`
        })
    ]
});

see.problem("hi")
see.problem("not being able to print out log messages in root folder")
see.should("should be able to specify a root directory")
see.story("hi")
see.should("hi")
hourglass.start("hi")
hourglass.end('hi')
see.is("hi")
    // see.how("hi")
    // see.step("hi")
    // see.is("is")
    // see.how("think")
    // see.step("step")
    // see.motherlode("hi")
    // hourglass.start("hi")
    // hourglass.end("hi")
    // module.exports = { hourglass }