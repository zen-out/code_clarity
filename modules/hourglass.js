var { winston } = require('createLogger');
const { date } = require("./date")
const config = {
    levels: {
        start: 0,
        expected: 1,
        end: 2,
    },
    colors: {
        expected: 'bold white',
        start: 'bold cyan',
        end: 'bold green'
    }
};

winston.addColors(config.colors);
const hourglass = winston.createLogger({
    levels: config.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    ),
    transports: [
        new winston.transports.File({
            filename: `logs/timer/${date}/.log`,
            format: winston.format.json()
        }),
    ],
    level: 'end',
    exceptionHandlers: [
        new winston.transports.File({
            format: winston.format.json(),
            filename: `logs/${date}/7_exceptions.log`
        })
    ]

});

module.exports = { hourglass, winston }