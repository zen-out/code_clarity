var winston = require('winston');
const { formatDateTime } = require("format_date_time_moment/node")


let date = formatDateTime.format(new Date(), "ll")
let removeSpaces = date.replaceAll(" ", "")
let getDate = removeSpaces.replaceAll(",", "-")
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
            winston.format.label("label"),
            winston.format.colorize(),
            winston.format.simple(),
        ),
        transports: [
            new winston.transports.Console(), new winston.transports.File({
                level: "story",
                filename: `logs/${feature}/${getDate}/${getDate}_userStory.log`,
                format: winston.format.json()

            }),
            new winston.transports.File({
                level: "problem",
                filename: `logs/${feature}/${getDate}/1_problem.log`,
                format: winston.format.json()

            }), new winston.transports.File({
                level: "should",
                filename: `logs/${feature}/${getDate}/2_should.log`,
                format: winston.format.json()
            }),
            new winston.transports.File({
                level: "is",
                filename: `logs/${feature}/${getDate}/3_is.log`,
                format: winston.format.json()
            }),
            new winston.transports.File({
                level: "how",
                filename: `logs/${feature}/${getDate}/4_how.log`,
                format: winston.format.json()
            }),
            new winston.transports.File({
                level: "step",
                filename: `logs/${feature}/${getDate}/5_step.log`,
                format: winston.format.json()
            }),
            new winston.transports.File({
                level: "motherlode",
                filename: `logs/${feature}/${getDate}/6_sims3.log`,
                format: winston.format.json()
            }),
        ],
        level: 'motherlode',
        exceptionHandlers: [
            new winston.transports.File({
                format: winston.format.json(),
                filename: `logs/${feature}/${getDate}/7_exceptions.log`
            })
        ],
        rejectionHandlers: [
            new winston.transports.File({
                format: winston.format.json(),
                filename: `logs/${feature}/${getDate}/8_rejections.log`
            })
        ]
    })
}
const see = winston.createLogger({
    levels: config.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    ),
    transports: [
        new winston.transports.Console(), new winston.transports.File({
            level: "story",
            filename: "logs/0_userStory.log",
            format: winston.format.json()

        }),
        new winston.transports.File({
            level: "problem",
            filename: "logs/1_problem.log",
            format: winston.format.json()

        }), new winston.transports.File({
            level: "should",
            filename: "logs/2_should.log",
            format: winston.format.json()
        }),
        new winston.transports.File({
            level: "is",
            filename: "logs/3_is.log",
            format: winston.format.json()
        }),
        new winston.transports.File({
            level: "how",
            filename: "logs/4_how.log",
            format: winston.format.json()
        }),
        new winston.transports.File({
            level: "step",
            filename: "logs/5_step.log",
            format: winston.format.json()
        }),
        new winston.transports.File({
            level: "motherlode",
            filename: "logs/6_sims3.log",
            format: winston.format.json()
        }),
    ],
    level: 'motherlode',
    exceptionHandlers: [
        new winston.transports.File({
            format: winston.format.json(),
            filename: 'logs/7_exceptions.log'
        })
    ]

});

module.exports = { winston, createLogger, see }