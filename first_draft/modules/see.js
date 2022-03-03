var winston = require('winston');
const { getDate } = require("./getDate")
const fs = require('fs-extra')


const config = {
    levels: {
        story: 0,
        problem: 1,
        should: 2,
        is: 3,
        how: 4,
        step: 5,
        motherlode: 6
    },
    colors: {
        story: 'bold gray whiteBG',
        problem: 'bold red',
        should: 'bold magenta',
        is: 'bold yellow',
        how: 'bold white',
        step: 'bold cyan',
        motherlode: 'bold green'
    }
};

winston.addColors(config.colors);

const see = winston.createLogger({
    levels: config.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    ),
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
        }),
    ],
    level: 'step',
    exceptionHandlers: [
        new winston.transports.File({
            format: winston.format.json(),
            filename: `upsets/${getDate}/exceptions.log`
        })
    ]
});

module.exports = { see }