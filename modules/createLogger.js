const winston = require("winston")
const { date } = require("./date")

function createLogger(feature) {
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
            //     filename: `logs/${feature}/${date}/${date}_userStory.log`,
            //     format: winston.format.json()

            // }),
            // new winston.transports.File({
            //     level: "problem",
            //     filename: `logs/${feature}/${date}/1_problem.log`,
            //     format: winston.format.json()

            // }),
            // new winston.transports.File({
            //     level: "should",
            //     filename: `logs/${feature}/${date}/2_should.log`,
            //     format: winston.format.json()
            // }),
            // new winston.transports.File({
            //     level: "is",
            //     filename: `logs/${feature}/${date}/3_is.log`,
            //     format: winston.format.json()
            // }),
            // new winston.transports.File({
            //     level: "how",
            //     filename: `logs/${feature}/${date}/4_how.log`,
            //     format: winston.format.json()
            // }),
            new winston.transports.File({
                // level: "step",
                filename: `logs/${feature}/${date}/5_step.log`,
                format: winston.format.json()
            }),
            new winston.transports.File({
                level: "motherlode",
                filename: `logs/${feature}/${date}/6_sims3.log`,
                format: winston.format.json()
            }),
        ],
        level: 'step',
        exceptionHandlers: [
            new winston.transports.File({
                format: winston.format.json(),
                filename: `logs/${feature}/${date}/7_exceptions.log`
            })
        ],
        rejectionHandlers: [
            new winston.transports.File({
                format: winston.format.json(),
                filename: `logs/${feature}/${date}/8_rejections.log`
            })
        ]
    })
}
module.exports = { createLogger }