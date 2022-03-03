const winston = require("winston")
const { myFormat } = require("./format")
const { getDate } = require("./getDate")

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
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            // level: 'step',
            filename: `upsets/${getDate}/problems.log`,
            format: winston.format.simple()
        }),
        new winston.transports.File({
            level: 'motherlode',
            filename: `upsets/${getDate}/sims3.log`,
            format: winston.format.simple()
        }),
    ],
    level: 'motherlode',
    exceptionHandlers: [
        new winston.transports.File({
            format: winston.format.json(),
            filename: `upsets/${getDate}/exceptions.log`
        })
    ]
});

module.exports = { see }
see.problem("hi")
see.problem("not being able to print out log messages in root folder")
see.should("should be able to specify a root directory")
see.story("hi")
see.should("hi")
see.is("hi")
see.how("how")
see.step("step")
see.motherlode("motherlode")