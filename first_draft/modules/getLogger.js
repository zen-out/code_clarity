const winston = require("winston")
const { printf } = require("winston")
const { getDate } = require("./getDate")
var fs = require('fs');
var path = require('path');
var logDir = 'upsets'; // directory path you want to set
if (!fs.existsSync(logDir)) {
    // Create the directory if it does not exist
    fs.mkdirSync(logDir);
}

const rawFormat = printf((info) => {
    return `[${info.timestamp}] ${info.level}: ${info.message}`;
});

function getLogger(feature) {
    const config = {
        levels: {
            story: 0,
            problem: 1,
            should: 2,
            is: 3,
            how: 4,
            step: 6,
            motherlode: 7
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

    return winston.createLogger({
            levels: config.levels,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple(),
            ),
            transports: [
                // new winston.transports.Console(), new winston.transports.File({
                //     level: "story",
                //     filename: `upsets/${feature}/${getDate}/${getDate}_userStory.log`,
                //     format: winston.format.json()

                // }),
                // new winston.transports.File({
                //     level: "problem",
                //     filename: `upsets/${feature}/${getDate}/1_problem.log`,
                //     format: winston.format.json()

                // }),
                // new winston.transports.File({
                //     level: "should",
                //     filename: `upsets/${feature}/${getDate}/2_should.log`,
                //     format: winston.format.json()
                // }),
                // new winston.transports.File({
                //     level: "is",
                //     filename: `upsets/${feature}/${getDate}/3_is.log`,
                //     format: winston.format.json()
                // }),
                // new winston.transports.File({
                //     level: "how",
                //     filename: `upsets/${feature}/${getDate}/4_how.log`,
                //     format: winston.format.json()
                // }),
                new winston.transports.File({
                    filename: path.join(logDir, `/${feature}/${getDate}/problems.log`),
                    format: winston.format.json()
                }),
                new winston.transports.File({
                    level: "motherlode",
                    filename: path.join(logDir, `/${feature}/${getDate}/cheats.log`),
                    format: winston.format.json()
                }),
            ],
            level: 'step',
            exceptionHandlers: [
                new winston.transports.File({
                    format: rawFormat,
                    filename: path.join(logDir, `/${feature}/${getDate}/exceptions.log`
                    })],
                rejectionHandlers: [
                    new winston.transports.File({
                        format: winston.format.json(),
                        filename: `upsets/${feature}/${getDate}/rejections.log`
                    })
                ]
            })
    }
    module.exports = { getLogger }